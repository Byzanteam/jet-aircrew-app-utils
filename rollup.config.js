
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { version } from './package.json';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    file: `dist/jet-app-utils-${version}.js`,
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    production && terser(), // minify, but only in production
  ],
};
