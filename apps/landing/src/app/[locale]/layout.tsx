import "../../style.css";

import { GoogleAnalytics } from '@next/third-parties/google';
import languages from "@rallly/languages";
import { Analytics } from "@vercel/analytics/react";
import { LazyMotion, domAnimation } from "motion/react";
import type { Viewport } from "next";

import { sans } from "@/fonts/sans";
import { I18nProvider } from "@/i18n/client/i18n-provider";

export async function generateStaticParams() {
  return Object.keys(languages).map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function Root(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  const ga = process.env.GA_MEASUREMENT_ID || "";
  return (
    <html lang={locale} className={sans.className}>
      <body>
        <LazyMotion features={domAnimation}>
          <I18nProvider locale={locale}>{children}</I18nProvider>
        </LazyMotion>
        <Analytics />
      </body>
      <GoogleAnalytics gaId={ga} />
    </html>
  );
}
