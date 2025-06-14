import { i18nDefaultConfig, i18nInstance } from "../i18n";
import type { EmailContext } from "../types";

i18nInstance.init({
  ...i18nDefaultConfig,
  initImmediate: true,
});

export const previewEmailContext: EmailContext = {
  logoUrl: "https://d1vc0q3r9a4nkh.cloudfront.net/kinpal.png",
  baseUrl: "https://kinpal.com",
  domain: "kinpal.com",
  supportEmail: "support@kinpal.com",
  i18n: i18nInstance,
  t: i18nInstance.getFixedT("en"),
};
