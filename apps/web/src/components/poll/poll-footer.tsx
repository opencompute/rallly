import Link from "next/link";

import { Trans } from "@/components/trans";

export function PollFooter() {
  return (
    <div className="py-4 text-center text-sm text-gray-500">
      <Trans
        defaults="Powered by <a>{name}</a>"
        i18nKey="poweredByKinpal"
        values={{ name: "kinpal.com" }}
        components={{
          a: (
            <Link
              className="hover:text-primary-600 rounded-none border-b border-b-gray-500 font-semibold"
              href="https://kinpal.com"
            />
          ),
        }}
      />
    </div>
  );
}
