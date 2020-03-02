import typescript from '@rollup/plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

import { version } from './package.json';

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: 'src/lib/script/index.ts',
    output: {
      file: `dist/jet-app-utils-${version}.js`,
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      production && terser(), // minify, but only in production
      typescript(),
    ],
  },
  {
    input: 'src/lib/style/index.scss',
    output: {
      file: 'dist/utilities_classes.css',
      format: 'cjs',
    },
    plugins: [
      postcss({
        extract: true,
        plugins: [],
        extensions: ['.css', '.scss', '.sass'],
        minimize: true,
      }),
    ],
  },
];
