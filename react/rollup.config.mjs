import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";

export default {
	input: "src/main.js",
	output: {
		file: "public/js/main.js",
		format: "es"
	},
	plugins: [
		replace({"process.env.NODE_ENV": JSON.stringify("development") }),
		resolve({extensions: [".js", ".jsx"]}),
		babel({presets: ["@babel/preset-react"]}),
		commonjs(),
		terser()
	]
};
