import Link from "next/link";
import Logo from "@/assets/logo-mark.svg";

export function LogoLink() {
  return (
    <Link
      className="font-semibold text-primary-600 transition-transform active:translate-y-1"
      href="/"
    >
      <Logo className="size-8" />
    </Link>
  );
}
