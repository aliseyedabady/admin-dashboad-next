# 🚀 شروع سریع - Admin Dashboard

## خوش آمدید! 👋

این یک **Admin Dashboard حرفه‌ای** با Next.js 15 است که شامل:
- ✅ دو زبانه (فارسی/انگلیسی) با RTL
- ✅ Dark/Light Mode
- ✅ 11 صفحه کامل
- ✅ Authentication
- ✅ Charts & Analytics
- ✅ Responsive Design

---

## ⚡ شروع سریع (3 مرحله)

### 1️⃣ نصب و اجرا
```bash
# نصب packages
npm install

# اجرای سرور
npm run dev
```

### 2️⃣ باز کردن در مرورگر
```
http://localhost:3000
```

### 3️⃣ ورود
```
ایمیل: admin@example.com
پسورد: 123456
```

---

## 🗂️ ساختار پروژه

```
src/
├── app/              صفحات (11 صفحه)
├── components/       کامپوننت‌ها (20+ عدد)
├── locales/          ترجمه‌ها (فارسی/انگلیسی)
├── lib/              کتابخانه‌ها و utils
├── hooks/            Custom hooks
└── data/             Mock data
```

---

## 📚 مستندات

### اصلی:
- **README.md** - راهنمای کامل پروژه
- **INSTRUCTIONS.md** - دستورالعمل نصب و اجرا
- **CODE_REVIEW.md** - بررسی کد و کیفیت

### تخصصی:
- **PROJECT_STRUCTURE.md** - ساختار دقیق فایل‌ها
- **README_I18N.md** - سیستم چند زبانه
- **FORM_VALIDATION.md** - راهنمای فرم‌ها

---

## 🎯 صفحات موجود

### احراز هویت:
- `/login` - ورود
- `/register` - ثبت‌نام

### داشبورد:
- `/dashboard` - صفحه اصلی
- `/analytics` - تحلیل‌ها
- `/users` - کاربران
- `/orders` - سفارشات
- `/reports` - گزارش‌ها
- `/notifications` - اعلان‌ها
- `/profile` - پروفایل
- `/settings` - تنظیمات

---

## 🌐 تغییر زبان

کلیک روی آیکون **🌐** در navbar:
- فارسی ↔ انگلیسی
- RTL ↔ LTR
- فونت خودکار تغییر می‌کند

---

## 🎨 تغییر تم

کلیک روی آیکون **☀️/🌙** در navbar:
- Light Mode
- Dark Mode
- System (خودکار)

---

## 📝 دستورات مفید

```bash
npm run dev          # اجرای سرور
npm run build        # Build برای production
npm run lint         # بررسی کد
npm run format       # فرمت کردن کد
```

---

## 🔧 تنظیمات

### زبان پیش‌فرض:
فعلاً **فارسی** است. برای تغییر:
```typescript
// src/contexts/language-context.tsx
const [language, setLanguageState] = useState<Language>("en");
```

### تم پیش‌فرض:
فعلاً **System** است (auto). برای تغییر:
```typescript
// src/app/layout.tsx
defaultTheme="dark" // یا "light"
```

---

## 🐛 حل مشکلات

### سرور start نمی‌شود:
```bash
pkill -f "next dev"
rm -rf .next
npm run dev
```

### استایل‌ها نمایش داده نمی‌شوند:
```bash
rm -rf .next
npm run dev
# سپس Hard Refresh: Cmd+Shift+R
```

### خطای build:
```bash
rm -rf node_modules .next
npm install
npm run build
```

---

## 💡 نکات مهم

1. **Mock Auth**: برای demo است، در production جایگزین کنید
2. **Mock Data**: فایل‌های JSON در `src/data/`
3. **Customization**: تمام رنگ‌ها در `src/app/globals.css`
4. **Add Pages**: در `src/app/(dashboard)/` بسازید

---

## 🎊 آماده است!

همه چیز آماده استفاده است:
- ✅ Code کامل و تست شده
- ✅ Build موفق
- ✅ مستندات جامع
- ✅ بدون error

**شروع کنید و لذت ببرید! 🚀**

---

## 📞 کمک بیشتر

اگر سؤالی دارید:
1. `README.md` را بخوانید
2. `CODE_REVIEW.md` را چک کنید
3. کدها را مطالعه کنید (خوب comment شده‌اند)

**موفق باشید! 🎉**

