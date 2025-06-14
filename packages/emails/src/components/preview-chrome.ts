import type { EmailChrome } from "../types";

/**
 * Sample branding/env used by the react-email preview server (`pnpm dev`).
 * Real sends build `chrome` from the caller's branding + env via `resolveChrome`.
 */
export const previewChrome: EmailChrome = {
  logoUrl: "https://d39ixtfgglw55o.cloudfront.net/images/kinpal-logo-mark.png",
  baseUrl: "https://kinpal.com",
  domain: "kinpal.com",
  supportEmail: "support@kinpal.com",
  appName: "Kinpal",
  primaryColor: "#4f46e5",
  hideAttribution: false,
};
