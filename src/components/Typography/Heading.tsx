import { Color } from "@/lib/types/theme";
import type { Font } from "@/lib/types/typography";
import { Fonts } from "@/lib/types/typography";
import { Typography } from "./Typography";


type HeadingProps = {
  font?: Font;
  color?: Color 
  className?: string;
  children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({
  font = Fonts.WILD_WORLD,
  color,
  className,
  children,
}) => {
  return (
    <Typography
      as="h2"
      font={font}
      size="text-4xl"
      className={className}
      color={color}
    >
      {children}
    </Typography>
  );
};

export { Heading };
