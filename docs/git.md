## Các bước cần làm trước

1. Đăng ký một tài khoản Github
2. Download phần mềm git và cài đặt vào máy: Mac: https://git-scm.com/download/mac, Windows: https://git-scm.com/download/win
  
## Setup git repo
1. Tạo 1 git repo trên github
2. <img width="1279" alt="image" src="https://user-images.githubusercontent.com/2143150/145515480-6e90c7db-a15a-49f8-8284-0948835080be.png">
3. Dưới máy, mở vs code, mở termial vs code

### Cấu hình lần đầu
1. `git config --global user.email "<email bạn đã đăng ký với github>"`
2. `git config --global user.name "<tên bạn>"`

### Cấu hình từng dự án
1. `git init`
2. Tạo file tên là `.gitignore`, điền nội dung `node_modules` --> để ignore các thư mục node_modules, không push lên git
3. `git add .`
4. `git commit -m "initialize"`
5. `git remote add origin "<git repo url>"`
6. `git push -u origin main`

Ở bước 6, máy tính của bạn có thể yêu cầu đăng nhập github.
  
  ### Cập nhật git những lần sau
  1. `git add .`
  2. `git commit -m "<ghi chú của bạn về nội dung cập nhật>"`
  3. `git push -u origin main`
