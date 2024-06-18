import { DiscordIcon } from "@rallly/icons";
import languages from "@rallly/languages";
import { Button } from "@rallly/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@rallly/ui/select";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

import { Trans } from "@/components/trans";
import Supabase from "~/supabase.svg";
import Vercel from "~/vercel-logotype-dark.svg";

export const LanguageSelect = () => {
  const router = useRouter();

  return (
    <Select
      value={router.locale}
      onValueChange={(newLocale) => {
        router.replace(router.asPath, undefined, {
          locale: newLocale,
          scroll: false,
        });
      }}
    >
      <SelectTrigger asChild>
        <Button className="w-full">
          <SelectValue />
        </Button>
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

const Footer: React.FunctionComponent = () => {
  return (
    <div className="mx-auto space-y-8">
      <div className="space-y-16 lg:flex lg:space-x-8 lg:space-y-0">
        <div className=" lg:w-2/6">
          <Image
            src="/logo-grayscale.svg"
            width={140}
            height={140}
            alt="Kinpal"
          />
          <div className="flex items-center space-x-6">
            <Link
              target="_blank"
              href="https://twitter.com/kinpalai"
              className="hover:text-primary-600 text-sm text-gray-500 hover:no-underline"
            >
              <TwitterIcon className="size-5" />
            </Link>
            <Link
              target="_blank"
              href="https://discord.gg/ZRZKqJf3tY"
              className="hover:text-primary-600 text-sm text-gray-500 hover:no-underline"
            >
              <DiscordIcon className="size-5" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/kinpal"
              className="hover:text-primary-600 text-sm text-gray-500 hover:no-underline"
            >
              <LinkedinIcon className="size-5" />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/kinpalai"
              className="hover:text-primary-600 text-sm text-gray-500 hover:no-underline"
            >
              <GithubIcon className="size-5" />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/6">
          <div className="mb-8 font-medium">
            <Trans i18nKey="links" defaults="Links" />
          </div>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link
                className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
                href="/pricing"
              >
                <Trans i18nKey="pricing" defaults="Pricing" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
                href="https://github.com/opencompute/rallly/discussions"
              >
                <Trans i18nKey="discussions" defaults="Discussions" />
              </Link>
            </li>
            <li>
              <Link
                href="https://kinpal.com/blog"
                className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
              >
                <Trans i18nKey="blog" defaults="Blog" />
              </Link>
            </li>
            <li>
              <Link
                href="https://support.kinpal.com"
                className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
              >
                <Trans i18nKey="support" defaults="Support" />
              </Link>
            </li>
            <li>
              <Link
                href="https://rallly.openstatus.dev"
                className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
              >
                <Trans i18nKey="status" defaults="Status" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/6">
          <div className="mb-8 font-medium">
            <Trans i18nKey="solutions" defaults="Solutions" />
          </div>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link
                className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
                href="/best-doodle-alternative"
              >
                <Trans
                  i18nKey="bestDoodleAlternative"
                  defaults="Best Doodle Alternative"
                />
              </Link>
            </li>
            <li>
              <Link
                className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
                href="/free-scheduling-poll"
              >
                <Trans
                  i18nKey="freeSchedulingPoll"
                  defaults="Free Scheduling Poll"
                />
              </Link>
            </li>
            <li>
              <Link
                className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
                href="/find-a-time"
              >
                <Trans i18nKey="findATime" defaults="Find a Time" />
              </Link>
            </li>
            <li>
              <Link
                className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
                href="/availability-poll"
              >
                <Trans
                  i18nKey="availabilityPoll"
                  defaults="Availability Poll"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:w-2/6">
          <div className="mb-8 font-medium">
            <Trans i18nKey="language" defaults="Language" />
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
              <Trans i18nKey="privacyPolicy" />
            </Link>
          </li>
          <li>
            <Link
              href="/cookie-policy"
              className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
            >
              <Trans i18nKey="cookiePolicy" />
            </Link>
          </li>
          <li>
            <Link
              href="/terms-of-use"
              className="inline-block font-normal text-gray-500 hover:text-gray-800 hover:no-underline"
            >
              <Trans i18nKey="termsOfUse" />
            </Link>
          </li>
        </ul>
        <div className="grid gap-2.5">
          <div className="text-sm tracking-tight sm:text-right">
            <Trans i18nKey="poweredBy" defaults="Powered by" />
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 md:justify-end">
            <div>
              <Link
                target="_blank"
                href="https://vercel.com?utm_source=kinpal&utm_campaign=oss"
                className="inline-block text-white"
              >
                <Vercel className="h-5" />
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                className="inline-block"
                href="https://supabase.com"
              >
                <Supabase className="h-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
