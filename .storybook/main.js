module.exports = {
	stories: [
		"../stories/**/*.stories.mdx",
		"../stories/components/**/*.stories.@(js|jsx|ts|tsx)",
		"../stories/pages/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@whitespace/storybook-addon-html",
	],
	framework: "@storybook/react",
};
