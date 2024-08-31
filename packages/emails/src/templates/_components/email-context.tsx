export type EmailContext = {
  logoUrl: string;
  baseUrl: string;
  domain: string;
  supportEmail: string;
};

export const defaultEmailContext = {
  logoUrl: "https://kinpal.com/logo.png",
  baseUrl: "https://kinpal.com",
  domain: "kinpal.com",
  supportEmail: "support@kinpal.com",
};
