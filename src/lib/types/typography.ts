export type Font = (typeof Fonts)[keyof typeof Fonts];

export const Fonts = {
  SPACE_GROTESK: "spaceGrotesk",
  SK_MODERNIST: "skModernist",
  WILD_WORLD: "wildWorld",
} as const;

export type TailwindTextSize =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl"
  | "text-6xl"
  | "text-7xl"
  | "text-8xl"
  | "text-9xl";
