import { env } from "@/env";

const sizes = {
  sm: {
    width: 22,
    height: 22,
  },
  md: {
    width: 32,
    height: 32,
  },
};

export const Logo = ({
  className,
  size = "md",
}: {
  className?: string;
  size?: keyof typeof sizes;
}) => {
  return (
    // biome-ignore lint/performance/noImgElement: we don't need Image component here
    <img
      className={className}
      src={env.LOGO_URL ?? "/static/logo.svg"}
      style={{
        width: sizes[size].width,
        height: sizes[size].height,
      }}
      alt={env.APP_NAME}
    />
  );
};
