// src/theme/amplifyTheme.ts
import { defaultTheme, Theme } from '@aws-amplify/ui-react';

export const amplifyTheme: Theme = {
  ...defaultTheme,
  name: 'propel',
  tokens: {
    colors: {
      brand: {
        primary: {
          10:  { value: 'var(--propel-rich-green)' },
          80:  { value: 'var(--propel-ignite-orange)' },
        },
      },
      background: {
        primary: { value: 'var(--propel-clay-high)' },
      },
      font: {
        interactive: { value: 'var(--propel-deep-gray)' },
      },
      // …añade aquí más mapeos de tu CSS variables hacia colores de Amplify…
    },
    fonts: {
      font: {
        body:    { value: 'var(--font-libre-franklin)' },
        heading: { value: 'var(--font-libre-franklin)' },
        mono:    { value: 'var(--font-dm-mono)' },
      },
    },
    components: {
      button: {
        primary: {
          backgroundColor: { value: 'var(--propel-rich-green)' },
          color:           { value: '#fff' },
        //   borderRadius:    { value: 'var(--radius)' },
        },
        // primaryHover: {
        //   backgroundColor: { value: 'var(--propel-ignite-orange)' },
        // },
      },
      field: {
        label: {
          color:    { value: 'var(--propel-deep-gray)' },
        //   fontSize: { value: 'var(--fs-base)' },
        },
        // control: {
        //   borderColor:  { value: 'var(--propel-deep-gray)' },
        //   borderRadius: { value: 'var(--radius)' },
        // },
      },
      // …y así según lo que uses (TextField, PasswordField, etc.)…
    },
  },
};
