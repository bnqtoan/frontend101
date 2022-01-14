### Các resource

1. Tailwind Anime: https://www.npmjs.com/package/tailwindcss-animatecss
2. WOW JS: https://wowjs.uk/docs.html
3. Thư viện anime css: https://animate.style/

### Cài đặt plugin tailwindcss-animatecss

`npm install tailwindcss-animatecss`

### Thêm vào danh sách plugin của Tailwind (file: tailwind.config.js)

```
plugins: [
  // Other plugins
  require('tailwindcss-animatecss')({
        classes: ['animate__animated', 'animate__fadeIn', 'animate__bounceIn'],
        settings: {},
        variants: [],
  }),
]
```

### Link file js vào

Thêm trong thẻ head

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
```

### Khai báo script chạy

Chèn script trước khi đóng thẻ body

```
<script>
wow = new WOW(
  {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
)

wow.init();
</script>
```

### Thêm class animate tương ứng vào các thành phần muốn thực hiện hiệu ứng hoạt hình

Ví dụ
```
<p class="animate__backInDown">Chiều xuống, tôi ngồi lại bãi biển ngắm hoàng hôn, không gian được phủ bởi một sắc tím đẹp đến nao lòng.</p>
```
