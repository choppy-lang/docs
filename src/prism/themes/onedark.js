var theme = {
	plain: {
		color: "#abb2bf",
		backgroundColor: "#282c34",
	},
	styles: [
		{
			types: ["comment", "prolog", "cdata"],
			style: {
				color: "#5c6370"
			}
		}, {
			types: ["doctype", "punctuation", "entity"],
			style: {
				color: "#abb2bf"
			}
		}, {
			types: ["attr-name", "class-name", "boolean", "constant", "number", "atrule"],
			style: {
				color: "#d19a66"
			}
		}, {
			types: ["keyword"],
			style: {
				color: "#c678dd"
			}
		}, {
			types: ["property", "tag", "symbol", "deleted", "important"],
			style: {
				color: "#e06c75"
			}
		}, {
			types: ["selector", "string", "char", "builtin", "inserted", "regex", "attr-value"],
			style: {
				color: "#98c379"
			}
		}, {
			types: ["variable", "operator", "function"],
			style: {
				color: "#61afef"
			}
		}, {
			types: ["url"],
			style: {
				color: "#56b6c2"
			}
		},
	]
}

module.exports = theme;