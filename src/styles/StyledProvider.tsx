'use client';

import type { ReactNode } from 'react';

import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from './StyledRegistry';
import GlobalStyle from './GlobalStyle';
import theme from './theme';


const shouldForwardProp = (propName: string, target: any) => {
  return typeof target === "string" ? isPropValid(propName) : true;
};

const StylesProvider = ({ children }: { children: ReactNode }) => (
  <StyledComponentsRegistry>
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={shouldForwardProp}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  </StyledComponentsRegistry>
);

export default StylesProvider;