import Image from "next/image";
import { Trans } from "react-i18next/TransWithoutContext";
import { FadeIn } from "@/components/home/fade-in";
import { getTranslation } from "@/i18n/server";

export async function Testimonial({ locale }: { locale: string }) {
  const { t } = await getTranslation(locale, ["home"]);
  return (
    <section className="py-8 sm:py-16">
      <FadeIn
        amount="all"
        className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-16"
      >
        <p className="max-w-2xl text-xl leading-normal sm:text-2xl">
          <Trans
            t={t}
            ns="home"
            i18nKey="ericQuote"
            defaults="“If your scheduling workflow lives in emails, I strongly encourage you to try and let Kinpal simplify your scheduling tasks for a more organized and less stressful workday.”"
          />
        </div>
        <div className="sm:text-center">
          <p className="max-w-xl font-medium text-lg leading-normal sm:text-center">
            <Trans
              t={t}
              ns="home"
              i18nKey="ericQuote"
              defaults="“If your scheduling workflow lives in emails, I strongly encourage you to try and let Kinpal simplify your scheduling tasks for a more organized and less stressful workday.”"
            />
          </p>
          <p className="mt-1">
            <Link
              target="_blank"
              className="text-gray-600 text-sm hover:underline"
              href="https://www.trustpilot.com/reviews/645e1d1976733924e89d8203"
            >
              <Trans
                t={t}
                ns="home"
                i18nKey="viaTrustpilot"
                defaults="via Trustpilot"
              />
              <ArrowUpRight className="ml-1 inline size-3" />
            </Link>
          </p>
        </div>
        <div className="flex gap-x-4">
          <Image
            src="/static/images/mit-logo.svg"
            width={54}
            height={28}
            alt="MIT"
          />
          <div>
            <div className="font-semibold">Eric Fletcher</div>
            <div className="text-gray-600 text-sm">
              <Trans
                t={t}
                ns="home"
                i18nKey="ericJobTitle"
                defaults="Executive Assistant at MIT"
              />
            </div>
          </div>
          <Image
            className="rounded-full"
            src="/static/images/eric.png"
            width={48}
            height={48}
            alt="Eric"
          />
        </div>
      </FadeIn>
    </section>
  );
}
