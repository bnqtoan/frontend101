## Các code snippet hữu ích

Để định nghĩa code snippet mới, vào Preferrence > User snippets, mở file tương ứng theo loại ngôn ngữ cần định nghĩa snippet, dán vào file snippet có sẵn.
[Xem thêm](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

### File package.json

```
"tailwind-package": {
		"prefix": "tailwind-package",
		"body": [
		  "{",
		  "  \"name\": \"${1:example}\",",
		  "  \"version\": \"1.0.0\",",
		  "  \"description\": \"\",",
		  "  \"main\": \"index.js\",",
		  "  \"scripts\": {",
		  "    \"tailwind\": \"npm install -D tailwindcss@latest postcss@latest autoprefixer@latest && npx tailwindcss init -p && node -e \\\"const fs = require('fs'); fs.existsSync('src') || fs.mkdirSync('src'); fs.existsSync('src/style.css') || fs.writeFileSync('src/style.css', '@tailwind base; @tailwind components; @tailwind utilities;')\\\"\",",
		  "    \"dev\": \"npx tailwindcss --postcss -i ./src/style.css -o ./css/style.css\",",
		  "    \"watch\": \"npx tailwindcss --postcss  -i ./src/style.css -o ./css/style.css --watch\",",
		  "    \"build\": \"NODE_ENV=production npx tailwindcss --postcss -i ./src/style.css -o ./css/style.css\"",
		  "  },",
		  "  \"keywords\": [],",
		  "  \"author\": \"\",",
		  "  \"license\": \"ISC\",",
		  "  \"devDependencies\": {",
		  "    \"autoprefixer\": \"^10.3.4\",",
		  "    \"postcss\": \"^8.3.6\",",
		  "    \"tailwindcss\": \"^3.0.0\"",
		  "  }",
		  "}"
		],
		"description": "tailwind-package"
}
```

### File tailwind.config.js

```
"tailwind-config": {
  "prefix": "tailwind-config",
  "body": [
    "module.exports = {",
    "  content: [",
    "    \"**/*.html\"",
    "  ],",
    "  darkMode: 'class', // or 'media' or 'class'",
    "  theme: {",
    "    extend: {},",
    "  },",
    "  variants: {",
    "    extend: {},",
    "  },",
    "  plugins: [],",
    "}"
  ],
  "description": "tailwind-config"
}
```
