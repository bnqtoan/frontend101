## 1. Cài đặt

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

## 2. Tạo file config

`npx tailwindcss init -p`

## 3. Tạo file CSS

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 4. File package.json
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
    "tailwindcss": "^2.2.14"
  }
}
```

## 5. File tailwind.config.js
```
module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
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

## 7. Production build

`npm run build`
