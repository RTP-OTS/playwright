Method	คำอธิบาย
page.route()	ดักจับ Request ที่ตรงกับ Pattern หรือ URL ที่ระบุ
route.fulfill()	ตอบกลับคำร้องขอด้วย Response ที่ Mock ขึ้น
route.abort()	ปฏิเสธคำร้องขอ (เช่น กรณีเซิร์ฟเวอร์ล่ม)
route.continue()	ส่งคำร้องขอต่อไปยังเซิร์ฟเวอร์จริงหลังจากมีการปรับเปลี่ยน (เช่น Header, Body)
