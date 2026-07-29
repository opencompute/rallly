"use cache";

import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { Trans } from "react-i18next/TransWithoutContext";
import { getTranslation } from "@/i18n/server";
import { getAlternates } from "@/lib/alternates";
import { getAllPosts } from "@/lib/api";
import { PostPreview } from "./post-preview";

export default async function Page(props: {
  params: Promise<{ locale: string }>;
}) {
  cacheLife("max");
  const { locale } = await props.params;
  const { t } = await getTranslation(locale, ["blog", "common"]);
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "category",
    "excerpt",
  ]);
  return (
    <section className="space-y-12">
      <header className="sm:p-6">
        <h1 className="font-bold text-4xl text-foreground tracking-tight">
          <Trans t={t} ns="common" i18nKey="blog" defaults="Blog" />
        </h1>
      </header>
      <div className="mb-16 grid grid-cols-1 gap-4">
        {allPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            category={post.category}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  cacheLife("max");
  const { locale } = await props.params;
  const { t } = await getTranslation(locale, "blog");
  return {
    alternates: getAlternates({ locale, path: "/blog" }),
    title: t("blogTitle", {
      ns: "blog",
      defaultValue: "Kinpal - Blog",
    }),
    description: t("blogDescription", {
      ns: "blog",
      defaultValue: "News, updates and announcements about Kinpal.",
    }),
  };
}
