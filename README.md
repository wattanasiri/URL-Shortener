# URL-Shortener

## ขั้นตอนการติดตั้ง

### 1. Backend (NodeJS)
  1.1 เมื่อโหลด Repository ไปให้ทำการเข้าไปที่โฟล์เดอร์ "URL-Shortener"และทำการเปิด terminal ขึ้นมา<br/>
  1.2 ทำการเข้าไปที่ Folder "backend" ผ่านทาง terminal โดยใช้คำสั่ง <br/>
  "cd url-shortener-react" <br/>
  "cd backend" <br/>
  โดยให้ terminal ขึ้นดังนี้ \URL-Shortener\url-shortener-react\backend> <br/>
  1.3 ทำการพิมคำสั่ง "nodemon server.js" (หากยังไม่ได้ติดตั้ง nodemon ให้ทำการพิมคำสั่ง "npm i nodemon") <br/>
  1.4 ทำการ Run ส่วนของ Backend (NodeJS) เสร็จสิ้น <br/>
  
### 2. Frontend (React)
  2.1 เมื่อโหลด Repository ไปให้ทำการเข้าไปที่โฟล์เดอร์ "URL-Shortener"และทำการเปิด terminal ขึ้นมา <br/>
  2.2 ทำการเข้าไปที่ Folder "url-shortener-react" ผ่านทาง terminal โดยใช้คำสั่ง <br/>
  "cd url-shortener-react" <br/>
  โดยให้ terminal ขึ้นดังนี้ \URL-Shortener\url-shortener-react\> <br/>
  2.3 ทำการพิมพ์คำสั่ง "npm start" <br/>
  1.4 ทำการ Run ส่วนของ Frontend (React) เสร็จสิ้น <br/>
    
## เพิ่มเติม

- หากต้องการเปลี่ยน DB ที่ใช้ให้ทำการเข้าไปที่ไฟล์ ".env" ในโฟล์เดอร์ backend และทำการเปลี่ยนลิงค์ ATLAS_URI ให้ตรงกับ DB ที่ต้องการเชื่อมต่อ
- ในส่วนของ Frontend ปัจจุบันจะทำการเชื่อมกับ backend ที่ทำการ Deploy ไปแล้ว ให้ทำการเปลี่ยนลิงค์ในตัวแปร "uri" ในไฟล์ "app.js", "Column.js" และ "InputUrl.js" เป็น "http://localhost:5000/" หรือ ลิงค์ที่ทำการ Deploy backend ไป

