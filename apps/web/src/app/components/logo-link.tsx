import Image from "next/image";
import Link from "next/link";

export function LogoLink() {
  return (
    <Link
      className="font-semibold text-primary-600 transition-transform active:translate-y-1"
      href="/"
    >
      <Image
        src="/logo-mark.svg"
        alt="Kinpal"
        width={32}
        height={32}
        priority={true}
        className="inline-block shrink-0"
      /> Kinpal
    </Link>
  );
}
