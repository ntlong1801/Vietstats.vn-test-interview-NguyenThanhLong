import withMT from '@material-tailwind/react/utils/withMT';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DFA128',
        second: '#3D3D3D',
        blueGray: '#949CA9',
      },
      fontSize: {
        'h3-medium': [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: 500,
          },
        ],
        'h4-medium': [
          '20px',
          {
            lineHeight: '28px',
            fontWeight: 500,
          },
        ],
        'h5-bold': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: 700,
          },
        ],
        'h5-medium': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: 500,
          },
        ],
        'h5-regular': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: 400,
          },
        ],
        'h1-bold': [
          '48px',
          {
            lineHeight: '60px',
            fontWeight: 700,
          },
        ],
        'h1-medium': [
          '38px',
          {
            lineHeight: '46px',
            fontWeight: 500,
          },
        ],
        'h2-bold': [
          '30px',
          {
            lineHeight: '37.5px',
            fontWeight: 700,
          },
        ],
        'h3-bold': [
          '24px',
          {
            lineHeight: '30px',
            fontWeight: 700,
          },
        ],
        'body-medium': [
          '14px',
          {
            lineHeight: '22px',
            fontWeight: 500,
          },
        ],
        'body-bold': [
          '16px',
          {
            fontWeight: 700,
            lineHeight: '20px',
          },
        ],
        'body-regular': [
          '14px',
          {
            lineHeight: '22px',
            fontWeight: 400,
          },
        ],
        'footnote-desciption': [
          '12px',
          {
            lineHeight: '20px',
            fontWeight: 400,
          },
        ],
      },
      boxShadow: {
        custom: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)',
      },
      rotate: {
        '45': '45deg',
      },
      clipPath: {
        'custom-polygon': 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
      },
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
export default withMT(config);
