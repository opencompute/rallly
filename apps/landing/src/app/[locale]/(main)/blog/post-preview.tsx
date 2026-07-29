"use client";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Link from "next/link";

dayjs.extend(localizedFormat);

type Props = {
  title: string;
  category?: string;
  date: string;
  excerpt?: string;
  slug: string;
};

export const PostPreview = ({
  title,
  category: _category,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <article className="flex flex-col gap-2 sm:flex-row sm:gap-8">
      <div>
        <div className="w-48 pt-1 text-muted-foreground sm:text-right">
          <time dateTime={date}>{dayjs(date).format("LL")}</time>
        </div>
      </div>
      <div className="grow">
        <h2 className="mb-2 font-bold text-foreground text-lg tracking-tight">
          <Link
            href={`/blog/${slug}`}
            className="hover:text-primary hover:underline"
          >
            {title}
          </Link>
        </h2>
        <p className="mb-4 text-base text-muted-foreground leading-relaxed">
          {excerpt}
        </p>
      </div>
    </article>
  );
};
