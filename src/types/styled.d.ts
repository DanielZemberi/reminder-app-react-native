// import original module declarations
import "styled-components";
import { TDefaultTheme } from "../lib/theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends TDefaultTheme {}
}
