import { Color } from "@/lib/types/theme";
import type { Font } from "@/lib/types/typography";
import { Fonts } from "@/lib/types/typography";
import { Typography } from "./Typography";

type TitleProps = {
  font?: Font;
  color?: Color;
  className?: string;
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({
  font = Fonts.SK_MODERNIST,
  color,
  className,
  children,
}) => {
  return (
    <Typography
      as="h1"
      font={font}
      size="text-2xl"
      className={className}
      color={color}
    >
      {children}
    </Typography>
  );
};

export { Title };
