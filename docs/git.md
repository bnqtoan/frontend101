## Các bước cần làm trước

1. Đăng ký một tài khoản Github
2. Download phần mềm git và cài đặt vào máy: Mac: https://git-scm.com/download/mac, Windows: https://git-scm.com/download/win
  
## Setup git repo
1. Tạo 1 git repo trên github
2. Dưới máy, mở vs code, mở termial vs code

### Cấu hình lần đầu
1. `git config --global user.email="<email bạn đã đăng ký với github>"`
2. `git config --global user.name="<tên bạn>"`
3. `git init`
4. Tạo file .gitignore, nội dung node_modules --> để ignore các thư mục node_modules, không push lên git
5. `git add .`
6. `git commit -m "initialize"`
7. `git remote add origin "<git repo url>"`
  8. `git push -u origin main`

Ở bước 7, máy tính của bạn có thể yêu cầu đăng nhập github.
  
  ### Cập nhật git những lần sau
  1. `git add .`
  2. `git commit -m "<ghi chú của bạn về nội dung cập nhật>"`
  3. `git push -u origin main`
