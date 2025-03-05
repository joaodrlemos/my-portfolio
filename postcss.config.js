import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    autoprefixer(),
    postcssPresetEnv({ stage: 1 }),
    ...(process.env.NODE_ENV === 'production'
      ? [
          purgecss({
            content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
            safelist: ['html', 'body'],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]
      : []),
  ],
};
