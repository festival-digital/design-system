import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../stories';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  ),
];
