"use client";

import { buttonVariants, cn } from "@rallly/ui";
import { usePathname } from "next/navigation";
import { LinkBase } from "@/i18n/client/link";

export const NavLink = ({
  className,
  ...props
}: React.ComponentProps<typeof LinkBase>) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  return (
    <LinkBase
      className={cn(
        buttonVariants({ variant: "ghost" }),
        isActive ? "bg-landing-selected text-foreground" : "",
        className,
      )}
      {...props}
    />
  );
};
