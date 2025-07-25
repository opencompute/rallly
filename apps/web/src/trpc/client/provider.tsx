"use client";
import { usePostHog } from "@rallly/posthog/client";
import { toast } from "@rallly/ui/sonner";
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { httpBatchLink, TRPCClientError } from "@trpc/client";
import { signOut } from "next-auth/react";
import { useState } from "react";
import superjson from "superjson";
import { useTranslation } from "@/i18n/client";
import { trpc } from "../client";

export function TRPCProvider(props: { children: React.ReactNode }) {
  const posthog = usePostHog();
  const { t } = useTranslation();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            staleTime: 1000 * 60,
          },
        },
        mutationCache: new MutationCache({
          onError(error) {
            if (error instanceof TRPCClientError) {
              posthog.capture("failed api request", {
                path: error.data.path,
                code: error.data.code,
                message: error.message,
              });
              switch (error.data.code) {
                case "UNAUTHORIZED":
                  window.location.href = "/login";
                  break;
                case "TOO_MANY_REQUESTS":
                  toast.error(
                    t("tooManyRequests", {
                      defaultValue: "Too many requests",
                    }),
                    {
                      description: t("tooManyRequestsDescription", {
                        defaultValue: "Please try again later.",
                      }),
                    },
                  );
                  break;
                case "FORBIDDEN":
                  signOut({
                    redirect: false,
                  }).then(() => {
                    window.location.href = "/login";
                  });

                  break;
                default:
                  console.error(error);
                  break;
              }
            }
          },
        }),
      }),
  );
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",
          transformer: superjson,
        }),
      ],
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
