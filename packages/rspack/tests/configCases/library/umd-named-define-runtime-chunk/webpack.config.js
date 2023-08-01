/** @type {import("../../../../dist").Configuration} */
module.exports = {
	entry: {
		main: {
			import: "./index.js",
			runtime: "runtime"
		}
	},
	output: {
		libraryTarget: "umd",
		library: {
			root: "testLibrary[name]",
			amd: "test-library-[name]",
			commonjs: "test-library-[name]"
		},
		umdNamedDefine: true
	},
	externals: "module"
};
