Giả sử bạn đang cần cài đặt tailwind vào thư mục dự án tại ổ `D:\Frontend\tailwind-project`

## 1. Tạo file package.json (trong thư mục tailwind-project)

```
{
  "name": "frontend-danh-cho-designer-by-telos",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "tailwind": "npm install -D tailwindcss@latest postcss@latest autoprefixer@latest && npx tailwindcss init -p && node -e \"const fs = require('fs'); fs.existsSync('src') || fs.mkdirSync('src'); fs.existsSync('src/style.css') || fs.writeFileSync('src/style.css', '@tailwind base; @tailwind components; @tailwind utilities;')\"",
    "dev": "npx tailwindcss --postcss -i ./src/style.css -o ./css/style.css",
    "watch": "npx tailwindcss --postcss  -i ./src/style.css -o ./css/style.css --watch",
    "build": "NODE_ENV=production npx tailwindcss --postcss -i ./src/style.css -o ./css/style.css"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "autoprefixer": "^10.4.8",
    "postcss": "^8.4.16",
    "tailwindcss": "^3.1.8"
  }
}
```

## 2. Chạy install

Di chuyển vào thư mục cần cài đặt tailwind bằng lệnh cd, vd: `cd D:\Frontend\tailwind-project` hoặc `cd tailwind-project` nếu terminal của bạn đang ở D:\Frontend. Sau đó chạy lệnh:

`npm run tailwind`

## 3. Ghi đè file tailwind.config.js

```
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

## 4. Chạy watch file để dev

`npm run watch`

