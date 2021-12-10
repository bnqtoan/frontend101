Tiền đề: bạn đã cài đặt NodeJS thành công trên máy tính. Để kiểm tra là đã cài đặt thành công NodeJS, bạn vào terminal, gõ `npm -v` nhấn enter, và `npx -v` nhấn enter, nếu ra được số version thì đã thành công, nếu bị báo lỗi thì comment bên dưới.

## 1. Cài đặt

Trong terminal, di chuyển đến thư mục cần cài đặt bằng cách gõ lệnh `cd đường_dẫn_đến thư mục cần cài đặt>`, sau đó gõ:

`npm init -y`

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

Nếu bạn thấy trong thư mục có thư mục node_modules & file packages.json thì đã thành công.

## 2. Tạo file config

`npx tailwindcss init -p`

Nếu bạn thấy trong thư mục có thêm 2 file `tailwind.config.js` và `postcss.config.js` thì đã thành công.

## 3. Tạo file src/style.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 4. Ghi đè nội dung file package.json
```
{
  "name": "tailwind",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "npx tailwindcss --postcss -i ./src/style.css -o ./css/style.css",
    "watch": "npx tailwindcss --postcss  -i ./src/style.css -o ./css/style.css --watch",
    "build" : "NODE_ENV=production npx tailwindcss --postcss -i ./src/style.css -o ./css/style.css"
  },
  "devDependencies": {
    "autoprefixer": "^10.3.4",
    "postcss": "^8.3.6",
    "tailwindcss": "^3.0.0"
  }
}
```

## 5. Ghi đè nội dung file tailwind.config.js
```
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

## 6. Dịch file

`npm run watch`

Giữ cho lệnh này chạy, không tắt terminal
