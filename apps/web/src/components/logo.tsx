import Image from "next/image";

const sizes = {
  sm: {
    width: 22,
    height: 22,
  },
  md: {
    width: 30,
    height: 30,
  },
};

export const Logo = ({ size = "md" }: { size?: keyof typeof sizes }) => {
  return (
    <Image
      priority={true}
      className="mx"
      src="/static/logo.svg"
      width={sizes[size].width}
      height={sizes[size].height}
      alt="Rallly"
    />
  );
};
