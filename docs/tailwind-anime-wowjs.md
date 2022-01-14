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
      classes: ['animate__animated', 'animate__fadeIn', 'animate__bounceIn','animate__fadeInUp'],
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

Ở bước này, nếu bạn muốn tự động đưa các chuyển động vào từng thẻ mà không cần phải thêm bằng tay, chỉ cần đưa thêm một đoạn script nhỏ, tóm tắt lại bạn có code này

```
<script>
  var elems = document.querySelectorAll('p,img,ul,ol,h1,h2,h3,h4,h5,h6');
  elems.forEach(function(elem){
      elem.classList.add('wow');
      elem.classList.add('animate__fadeInUp');
  });

  wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animate__animated', // default
      offset:       100,          // default
      mobile:       true,       // default
      live:         true        // default
    }
  );
  wow.init();
</script>
```

### Thêm class animate tương ứng vào các thành phần muốn thực hiện hiệu ứng hoạt hình

Ví dụ
```
<p class="wow animate__fadeInUp">Chiều xuống, tôi ngồi lại bãi biển ngắm hoàng hôn, không gian được phủ bởi một sắc tím đẹp đến nao lòng.</p>
```
