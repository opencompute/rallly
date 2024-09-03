import { i18nDefaultConfig, i18nInstance } from "../i18n";
import { EmailContext } from "../types";

i18nInstance.init({
  ...i18nDefaultConfig,
  initImmediate: true,
});

export const previewEmailContext: EmailContext = {
  logoUrl: "https://kinpal.com/logo.png",
  baseUrl: "https://kinpal.com",
  domain: "kinpal.com",
  supportEmail: "support@kinpal.com",
  i18n: i18nInstance,
  t: i18nInstance.getFixedT("en"),
};
