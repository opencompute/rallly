"use client";

import languages, { defaultLocale, supportedLngs } from "@rallly/languages";
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
import XIcon from "@/assets/x.svg";
import { LinkBase } from "@/i18n/client/link";
import { Trans } from "@/i18n/client/trans";
import { useTranslation } from "@/i18n/client/use-translation";

const LanguageSelect = () => {
  const router = useRouter();
  const pathname = usePathname() ?? "";
  const { t, i18n } = useTranslation();
  return (
    <Select
      items={languages}
      value={i18n.language}
      onValueChange={(newLocale) => {
        if (!newLocale) {
          return;
        }

        const localeInPath = supportedLngs.find(
          (locale) =>
            pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
        );

        const newPath = localeInPath
          ? pathname.slice(localeInPath.length + 1) || "/"
          : pathname;

        router.replace(
          newLocale === defaultLocale ? newPath : `/${newLocale}${newPath}`,
        );
      }}
    >
      <SelectTrigger
        className="w-full"
        aria-label={t("language", { defaultValue: "Language" })}
      >
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
  const { t } = useTranslation("common");
  return (
    <div className="mx-auto space-y-8">
      <div className="space-y-16 lg:flex lg:space-x-8 lg:space-y-0">
        <div className="lg:w-1/4">
          <Image
            src="/logo-grayscale.svg"
            width={100}
            height={100}
            className="!mb-4 !border-l !border-gray-400 border-l-1"
            alt="Kinpal"
          />
          <div className="flex items-center space-x-6">
            <a
              target="_blank"
              href="https://x.com/kinpalai"
              className="translate-x-1 text-muted-foreground text-sm hover:text-primary hover:no-underline"
              rel="noreferrer noopener"
              aria-label={t("footerXLabel", { defaultValue: "Follow us on X" })}
            >
              <XIcon className="size-4" />
            </a>
            <a
              target="_blank"
              href="https://discord.gg/ZRZKqJf3tY"
              className="text-muted-foreground text-sm hover:text-primary hover:no-underline"
              rel="noreferrer noopener"
              aria-label={t("footerDiscordLabel", {
                defaultValue: "Join us on Discord",
              })}
            >
              <DiscordIcon className="size-4" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/kinpal"
              className="text-muted-foreground text-sm hover:text-primary hover:no-underline"
              rel="noreferrer noopener"
              aria-label={t("footerGithubLabel", {
                defaultValue: "View our GitHub repository",
              })}
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>
        </div>
        <div className="lg:w-1/4">
          <div className="mb-8 font-medium">
            <Trans ns="common" i18nKey="links" defaults="Links" />
          </div>
          <ul className="grid gap-3 text-sm">
            <li>
              <LinkBase
                className="inline-block font-normal text-muted-link"
                href="/pricing"
              >
                <Trans i18nKey="pricing" defaults="Pricing" />
              </LinkBase>
            </li>
            <li>
              <LinkBase
                href="/blog"
                className="inline-block font-normal text-muted-link"
              >
                <Trans ns="common" i18nKey="blog" defaults="Blog" />
              </LinkBase>
            </li>
            <li>
              <a
                href="https://support.kinpal.com"
                className="inline-block font-normal text-muted-link"
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
          <ul className="grid gap-3 text-sm">
            <li>
              <LinkBase
                className="inline-block font-normal text-muted-link"
                href="/best-doodle-alternative"
              >
                <Trans
                  ns="common"
                  i18nKey="doodleAlternative"
                  defaults="Doodle alternative"
                />
              </LinkBase>
            </li>
            <li>
              <LinkBase
                className="inline-block font-normal text-muted-link"
                href="/when2meet-alternative"
              >
                <Trans
                  ns="common"
                  i18nKey="when2MeetAlternative"
                  defaults="When2Meet alternative"
                />
              </LinkBase>
            </li>
            <li>
              <LinkBase
                className="inline-block font-normal text-muted-link"
                href="/free-scheduling-poll"
              >
                <Trans
                  ns="common"
                  i18nKey="freeSchedulingPoll"
                  defaults="Free scheduling poll"
                />
              </LinkBase>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/4">
          <div id="language-select-label" className="mb-8 font-medium">
            <Trans ns="common" i18nKey="language" defaults="Language" />
          </div>
          <div className="mb-4">
            <LanguageSelect />
          </div>
        </div>
      </div>
      <div className="sm:pb-8">
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm leading-loose">
          <li>
            <Link
              href="/privacy-policy"
              className="inline-block font-normal text-muted-link"
            >
              <Trans ns="common" i18nKey="privacyPolicy" />
            </Link>
          </li>
          <li>
            <Link
              href="/cookie-policy"
              className="inline-block font-normal text-muted-link"
            >
              <Trans ns="common" i18nKey="cookiePolicy" />
            </Link>
          </li>
          <li>
            <Link
              href="/terms-of-use"
              className="inline-block font-normal text-muted-link"
            >
              <Trans ns="common" i18nKey="termsOfUse" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
