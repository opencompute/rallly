import type { Provider } from "next-auth/providers/index";

import { GithubProvider } from "../providers/github";
import { GoogleProvider } from "../providers/google";
import { MicrosoftProvider } from "../providers/microsoft";
import { OIDCProvider } from "../providers/oidc";

export function getOptionalProviders() {
  return [OIDCProvider(), GoogleProvider(), MicrosoftProvider(), GithubProvider()].filter(
    Boolean,
  ) as Provider[];
}
