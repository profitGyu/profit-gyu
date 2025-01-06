import BreakPoint from './breakPoint';
import Colors from './colors';

import Level from './levels';

type ThemeType = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
  }
}

const theme = {
  Colors,
  BreakPoint,
  Level,
};

export default theme;
