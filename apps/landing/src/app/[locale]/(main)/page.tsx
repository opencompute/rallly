"use cache";

import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import Bonus from "@/components/home/bonus";
import { MarketingHero } from "@/components/home/hero";
import { Marketing, MentionedBy } from "@/components/marketing";
import { getTranslation } from "@/i18n/server";
import { getAlternates } from "@/lib/alternates";
import { getMonthlyPollCount, getMonthlyVoterCount } from "@/lib/data";

export default async function Page(props: {
  params: Promise<{ locale: string }>;
}) {
  cacheLife("hours");
  const { locale } = await props.params;
  const { t } = await getTranslation(locale, ["home", "common"]);
  const [pollCount, voterCount] = await Promise.all([
    getMonthlyPollCount(),
    getMonthlyVoterCount(),
  ]);
  return (
    <Marketing>
      <MarketingHero
        title={t("headline", {
          defaultValue: "Find the best time to meet",
          ns: "home",
        })}
        description={t("subheading", {
          defaultValue:
            "Create a poll, share the link, and let everyone vote on the times that work. It's free and nobody needs an account.",
          ns: "home",
        })}
        callToAction={t("createAPoll", {
          ns: "home",
        })}
      />
      <Bonus locale={locale} />
      <MentionedBy />
    </Marketing>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  cacheLife("max");
  const { locale } = await props.params;
  const { t } = await getTranslation(locale, "home");
  return {
    alternates: getAlternates({ locale }),
    title: t("metaTitle", {
      defaultValue: "Kinpal: Free Group Meeting Scheduling Tool",
      ns: "home",
    }),
    description: t("metaDescription", {
      ns: "home",
      defaultValue:
        "Kinpal is the fastest and easiest scheduling and collaboration tool. Create a meeting poll in seconds, no login required.",
    }),
  };
}
