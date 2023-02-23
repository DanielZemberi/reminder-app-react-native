import colors from "./colors";
import { IColors } from "./colors/types";
import radius from "./radius";
import spacing from "./spacings";

export type TDefaultTheme = {
  color: IColors;
  radius: typeof radius;
  spacing: typeof spacing;
};

const getAppStyleGuide = () => {
  const styleGuide: TDefaultTheme = {
    color: colors,
    radius,
    spacing,
  };

  return { styleGuide };
};

export default getAppStyleGuide;
