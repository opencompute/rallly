export type EmailContext = {
  logoUrl: string;
  baseUrl: string;
  domain: string;
};

export const defaultEmailContext = {
  logoUrl: "https://kinpal.com/logo.png",
  baseUrl: "https://kinpal.com",
  domain: "kinpal.com",
};
