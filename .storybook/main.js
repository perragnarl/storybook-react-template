module.exports = {
	stories: [
		"../src/**/*.stories.mdx",
		"../src/components/**/*.stories.@(js|jsx|ts|tsx)",
		"../src/pages/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@whitespace/storybook-addon-html",
		"@storybook/addon-a11y",
		"addon-screen-reader",
	],
	framework: "@storybook/react",
};
