import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import purgecssModule from '@fullhuman/postcss-purgecss';

const purgecss = purgecssModule({
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

export default {
  plugins: [
    autoprefixer(),
    postcssPresetEnv({ stage: 1 }),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
