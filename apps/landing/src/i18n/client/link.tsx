"use client";

import { defaultLocale } from "@rallly/languages";
import Link from "next/link";
import { useTranslation } from "@/i18n/client/use-translation";

export const LinkBase = ({
  href,
  ...props
}: Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string;
}) => {
  const { i18n } = useTranslation();
  const locale =
    i18n.resolvedLanguage === defaultLocale ? "" : `/${i18n.resolvedLanguage}`;
  const newHref = href.startsWith("/") ? `${locale}${href}` : href;

  return <Link href={newHref} {...props} />;
};
