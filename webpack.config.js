const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js",
	},
	entry: "./src/main.js",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
	resolve: {
		extensions: ["", ".js", ".jsx"],
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@base": path.resolve(__dirname, "src/base"),
			"@components": path.resolve(__dirname, "src/components"),
			"@pages": path.resolve(__dirname, "src/pages"),
		},
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "bundle.css",
		}),
	],
	optimization: {
		minimizer: [new CssMinimizerPlugin()],
	},
};
