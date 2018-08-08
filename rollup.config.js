import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import babel from "rollup-plugin-babel";

const pkg = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      name: "wnjs",
      file: pkg.main,
      format: "umd",
      sourcemap: true
    },
    { file: pkg.module, format: "es", sourcemap: true }
  ],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    commonjs(),
    resolve({
      extensions: [".ts"]
    }),
    sourceMaps()
  ]
};
