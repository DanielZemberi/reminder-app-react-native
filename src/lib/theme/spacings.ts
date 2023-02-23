export type TVariant = "text" | "component";
export type TSize = "XS" | "S" | "M" | "L" | "XL";

const spacing = {
  component: { XS: 8, S: 16, M: 32, L: 64, XL: 80 },
  text: { XS: 16, S: 20, M: 24, L: 28, XL: 36 },
} as const;

export default spacing;
