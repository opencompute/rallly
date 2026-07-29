"use client";

import { buttonVariants } from "@rallly/ui";
import Link from "next/link";
import { Trans } from "@/i18n/client/trans";
import { linkToApp } from "@/lib/linkToApp";

export const QuickCreateButton = () => {
  return (
    <Link
      href={linkToApp("/new")}
      className={buttonVariants({ variant: "ghost" })}
    >
      <Trans i18nKey="quickCreate" defaults="Quick Create" />
    </Link>
  );
};
