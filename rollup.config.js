import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json/";

export default {
  input: "lib/hooks/useFollowingFeed/index.js",
  output: {
    file: "dist/hooks/useFollowingFeed.js",
    format: "cjs",
  },
  external: ["react", "@babel/plugin-runtime", "@hiveio/hive-js/"],
  plugins: [
    nodeResolve(),
    json(),
    babel({
      exclude: "node_modules/**",
      plugins: ["@babel/transform-runtime"],
      babelHelpers: "runtime",
    }),
    commonjs(),
  ],
};
