import react from '@vitejs/plugin-react'
import sassDts from 'vite-plugin-sass-dts'
import path from 'path';
const __dirname = path.resolve();

export default {
  jsx: 'react',
  plugins: [react(), sassDts(), reactPlugin()],
  resolve: {
    alias: {
      '~': `${__dirname}/src`,
    }
  }
};