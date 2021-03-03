import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs"
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/barista.js',
    format: 'cjs'
  },
  external: [
    'react', 
    '@babel/plugin-runtime'    
  ],
  plugins: [
    nodeResolve(),
    babel({
     exclude: 'node_modules/**',
     plugins: ['@babel/transform-runtime'],
     babelHelpers: 'runtime'
    }),
    commonjs()
  ]
};
