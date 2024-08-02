import { Color } from "@/lib/types/theme";
import type { Font } from "@/lib/types/typography";
import { Fonts } from "@/lib/types/typography";
import { Typography } from "./Typography";

type BodyProps = {
  font?: Font;
  color?: Color;
  className?: string;
  children: React.ReactNode;
};

const Body: React.FC<BodyProps> = ({
  font = Fonts.SK_MODERNIST,
  color,
  className,
  children,
}) => {
  return (
    <Typography
      as="p"
      font={font}
      size="text-base"
      className={className}
      color={color}
    >
      {children}
    </Typography>
  );
};

export { Body };
