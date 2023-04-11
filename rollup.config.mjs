import resolve from "@rollup/plugin-node-resolve";
import riot from "rollup-plugin-riot";

export default {
	input: "src/main.js",
	output: {
		file: "public/js/main.js",
		format: "es"
	},
	plugins: [resolve(), riot()]
};
