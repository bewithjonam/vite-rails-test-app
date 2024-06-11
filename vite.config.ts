import { defineConfig } from 'vite'
import replace from '@rollup/plugin-replace';
import dynamicImport from 'vite-plugin-dynamic-import'
import RubyPlugin from 'vite-plugin-ruby'

const TARGET = process.env.TARGET ||'web';
export default defineConfig({
  plugins: [
    RubyPlugin(),
  ],
  resolve: {
    extensions: [
      '.js', '.ts', '.jsx', '.tsx', '.json', '.mjs', '.vue',
      `.${TARGET}.jsx`, `.${TARGET}.js`, `.${TARGET}.scss`, `.${TARGET}.css`
    ],
  }
})
