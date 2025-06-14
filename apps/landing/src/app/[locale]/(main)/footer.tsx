"use client";

import languages, { supportedLngs } from "@rallly/languages";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@rallly/ui/select";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type * as React from "react";

import DiscordIcon from "@/assets/discord.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import TwitterIcon from "@/assets/twitter.svg";
import { LinkBase } from "@/i18n/client/link";
import { Trans } from "@/i18n/client/trans";
import { useTranslation } from "@/i18n/client/use-translation";

const LanguageSelect = () => {
  const router = useRouter();
  const pathname = usePathname() ?? "";
  const { i18n } = useTranslation();
  return (
    <Select
      value={i18n.language}
      onValueChange={(newLocale) => {
        const isLocalizedPath = supportedLngs.some((lng) =>
          pathname?.startsWith(`/${lng}`),
        );

        const newPath = isLocalizedPath
          ? pathname.replace(new RegExp(`^/${i18n.language}`), "")
          : pathname;

        router.replace(`/${newLocale}${newPath}`);
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languages).map(([code, name]) => (
          <SelectItem key={code} value={code}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export const Footer: React.FunctionComponent = () => {
  return (
    <div className="mx-auto space-y-8">
      <div className="space-y-16 lg:flex lg:space-x-8 lg:space-y-0">
        <div className="lg:w-1/4">
          <Image
            src="/logo-grayscale.svg"
            width={120}
            height={120}
            className="border-l-1 !border-l !border-gray-400"
            alt="Kinpal"
          />
          <div className="flex items-center space-x-4">
            <a
              target="_blank"
              href="https://x.com/kinpalai"
              className="text-gray-500 text-sm hover:text-primary hover:no-underline"
              rel="noreferrer noopener"
            >
              <TwitterIcon className="size-5" />
            </a>
            <a
              target="_blank"
              href="https://discord.gg/ZRZKqJf3tY"
              className="text-gray-500 text-sm hover:text-primary hover:no-underline"
              rel="noreferrer noopener"
            >
              <DiscordIcon className="size-5" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/kinpal"
              className="text-gray-500 text-sm hover:text-primary hover:no-underline"
              rel="noreferrer noopener"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </div>
        </div>
        <div className="lg:w-1/4">
          <div className="mb-8 font-medium">
            <Trans ns="common" i18nKey="links" defaults="Links" />
          </div>
          <ul className="grid gap-2 text-sm">
            <li>
              <LinkBase
                className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
                href="/pricing"
              >
                <Trans i18nKey="pricing" defaults="Pricing" />
              </LinkBase>
            </li>
            <li>
              <LinkBase
                href="/blog"
                className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
              >
                <Trans ns="common" i18nKey="blog" defaults="Blog" />
              </LinkBase>
            </li>
            <li>
              <a
                href="https://support.rallly.co"
                className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
              >
                <Trans ns="common" i18nKey="support" defaults="Support" />
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/4">
          <div className="mb-8 font-medium">
            <Trans i18nKey="solutions" defaults="Solutions" />
          </div>
          <ul className="grid gap-2 text-sm">
            <li>
              <LinkBase
                className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
                href="/best-doodle-alternative"
              >
                <Trans
                  ns="common"
                  i18nKey="bestDoodleAlternative"
                  defaults="Best Doodle Alternative"
                />
              </LinkBase>
            </li>
            <li>
              <LinkBase
                className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
                href="/free-scheduling-poll"
              >
                <Trans
                  ns="common"
                  i18nKey="freeSchedulingPoll"
                  defaults="Free Scheduling Poll"
                />
              </LinkBase>
            </li>
            <li>
              <LinkBase
                className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
                href="/availability-poll"
              >
                <Trans
                  ns="common"
                  i18nKey="availabilityPoll"
                  defaults="Availability Poll"
                />
              </LinkBase>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/4">
          <div className="mb-8 font-medium">
            <Trans ns="common" i18nKey="language" defaults="Language" />
          </div>
          <div className="mb-4">
            <LanguageSelect />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-x-8 gap-y-8 sm:flex-row sm:items-end sm:pb-8">
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm leading-loose">
          <li>
            <Link
              href="/privacy-policy"
              className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
            >
              <Trans ns="common" i18nKey="privacyPolicy" />
            </Link>
          </li>
          <li>
            <Link
              href="/cookie-policy"
              className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
            >
              <Trans ns="common" i18nKey="cookiePolicy" />
            </Link>
          </li>
          <li>
            <Link
              href="/terms-of-use"
              className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
            >
              <Trans ns="common" i18nKey="termsOfUse" />
            </Link>
          </li>
        </ul>
        <div className="grid gap-2.5">
          <div className="text-sm tracking-tight sm:text-right">
            <Trans ns="common" i18nKey="poweredBy" defaults="Powered by" />
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 md:justify-end">
            <div>
              <a
                target="_blank"
                href="https://vercel.com?utm_source=kinpal&utm_campaign=oss"
                className="inline-block text-white"
                rel="noreferrer noopener"
              >
                <Image
                  src="/static/images/partners/vercel-logotype-dark.svg"
                  alt="Vercel"
                  width={100}
                  height={24}
                />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                className="inline-block"
                href="https://supabase.com"
              >
                <Image
                  src="/static/images/partners/supabase.svg"
                  alt="Supabase"
                  width={123}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
