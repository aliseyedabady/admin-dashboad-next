# 🎨 راهنمای کامپوننت‌ها - Components Guide

## 📖 نمایش زنده کامپوننت‌ها

یک صفحه جدید اضافه شده که **تمام کامپوننت‌های UI** را با مثال‌های کاربردی نشان می‌دهد!

### 🚀 دسترسی:
```
مسیر: /components-demo
منو: کلیک روی "کامپوننت‌ها" / "Components" در Sidebar
```

---

## 🧩 کامپوننت‌های موجود

این صفحه شامل **15 کامپوننت UI** است:

### 1. **Buttons** 🔘
- 6 Variant: Default, Secondary, Outline, Ghost, Destructive, Link
- 4 Size: Small, Default, Large, Icon
- States: Normal, Disabled

### 2. **Badges** 🏷️
- 4 Variant: Default, Secondary, Outline, Destructive
- با آیکون
- رنگ‌های مختلف

### 3. **Input Fields** ✏️
- Text input
- Email input
- Password input
- Disabled state

### 4. **Select Dropdown** 📋
- Basic select
- Multiple options
- با Label

### 5. **Switch Toggle** 🔄
- On/Off state
- Disabled state
- RTL support

### 6. **Alerts** ⚠️
- 4 Variant: Info, Success, Warning, Error
- با Icon
- با Title و Description

### 7. **Progress Bar** 📊
- درصدهای مختلف
- Animated
- رنگ‌های قابل تنظیم

### 8. **Avatar** 👤
- اندازه‌های مختلف
- با Fallback (حروف اول)
- رنگ‌های سفارشی

### 9. **Skeleton Loader** ⏳
- Loading placeholder
- اشکال مختلف
- Pulse animation

### 10. **Cards** 📇
- Header, Content, Footer
- با Icon
- Nested cards

### 11. **Table** 📑
- Header و Body
- با Badge
- Responsive

### 12. **Tabs** 🗂️
- Tab navigation
- Multiple tabs
- Content switching

### 13. **Dialog/Modal** 🪟
- Modal window
- با Header و Footer
- Close button

### 14. **Dropdown Menu** 📜
- Menu items
- با Separator
- با Label

### 15. **Color Palette** 🎨
- همه رنگ‌های سیستم
- Primary, Secondary, Muted, etc.

---

## 💡 ویژگی‌های صفحه

### 1. **Live Preview**
هر کامپوننت در یک محیط واقعی نمایش داده می‌شود.

### 2. **Code Examples**
کد هر کامپوننت قابل مشاهده است:
- کلیک روی "نمایش کد" / "Show Code"
- کد کپی کنید
- در پروژه خودتان استفاده کنید

### 3. **Interactive**
کامپوننت‌ها تعاملی هستند:
- دکمه‌ها کلیک می‌شوند
- Switch ها تغییر می‌کنند
- Dialog ها باز می‌شوند
- Tab ها عوض می‌شوند

### 4. **مثال ترکیبی**
یک مثال کامل از ترکیب چند کامپوننت با هم.

### 5. **پالت رنگ**
نمایش تمام رنگ‌های سیستم طراحی.

---

## 🎯 نحوه استفاده

### برای توسعه‌دهندگان:

#### 1. مشاهده کامپوننت
```
1. برو به /components-demo
2. کامپوننت مورد نظر را ببین
3. با آن تعامل کن
```

#### 2. کپی کردن کد
```
1. روی "نمایش کد" کلیک کن
2. کد را کپی کن
3. در صفحه خودت paste کن
```

#### 3. سفارشی‌سازی
```
1. Props ها را تغییر بده
2. Variant ها را عوض کن
3. Style ها را customize کن
```

---

## 📝 مثال استفاده

### Button:
```tsx
import { Button } from "@/components/ui/button";

<Button variant="default">Click Me</Button>
<Button variant="outline" size="sm">Small</Button>
<Button disabled>Disabled</Button>
```

### Card:
```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>
```

### Alert:
```tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Operation completed.</AlertDescription>
</Alert>
```

---

## 🎨 ساختار هر Section

هر کامپوننت شامل:

### 1. **عنوان و توضیح**
- نام کامپوننت
- توضیح مختصر

### 2. **Preview**
- نمایش زنده
- تعاملی
- در محیط واقعی

### 3. **Code Example**
- کد import
- مثال استفاده
- Props مهم

### 4. **Variants**
- نسخه‌های مختلف
- State های مختلف
- اندازه‌های مختلف

---

## 🔧 سفارشی‌سازی صفحه

می‌توانید کامپوننت‌های بیشتری اضافه کنید:

```tsx
<ComponentSection
  title="Your Component"
  description="Description here"
  code={`// Your code example`}
>
  {/* Your component preview */}
  <YourComponent />
</ComponentSection>
```

---

## 📦 کامپوننت‌های قابل استفاده

### UI Components (15 عدد):
```
✅ Button        - دکمه‌ها
✅ Badge         - برچسب‌ها
✅ Input         - فیلد ورودی
✅ Label         - برچسب فرم
✅ Select        - منوی انتخاب
✅ Switch        - کلید تغییر
✅ Card          - کارت
✅ Table         - جدول
✅ Avatar        - تصویر کاربر
✅ Alert         - هشدار
✅ Progress      - نوار پیشرفت
✅ Skeleton      - بارگذاری
✅ Dialog        - پنجره
✅ Tabs          - تب‌ها
✅ Dropdown Menu - منوی کشویی
```

### Dashboard Components (4 عدد):
```
✅ StatCard          - کارت آماری
✅ OverviewChart     - نمودار
✅ RecentOrders      - جدول سفارشات
✅ ActivityTimeline  - تایم‌لاین
```

---

## 🎯 کاربردها

### برای توسعه‌دهندگان:
- 📚 مرجع سریع کامپوننت‌ها
- 📋 مثال‌های آماده
- 🎨 استایل‌گذاری یکسان
- 💡 الهام برای طراحی

### برای طراحان:
- 🎨 پالت رنگ
- 📏 Spacing و اندازه‌ها
- 🎭 Variants مختلف
- 🌈 Dark/Light mode

### برای مدیران:
- 👀 نمایش قابلیت‌ها
- 📊 Design system
- 🔍 بررسی کیفیت UI

---

## ✨ ویژگی‌های خاص

### 1. **دو زبانه**
- همه توضیحات به دو زبان
- RTL/LTR support
- فونت مناسب

### 2. **Dark Mode**
- همه مثال‌ها در هر دو تم
- رنگ‌ها تطبیق‌پذیر
- Contrast مناسب

### 3. **Responsive**
- در موبایل زیباست
- Grid adaptive
- Touch-friendly

### 4. **Interactive**
- تست مستقیم
- تغییر state
- Real-time preview

---

## 📱 تست کنید!

### دسترسی:
```
Sidebar → "کامپوننت‌ها" / "Components"
یا
مستقیم: http://localhost:3000/components-demo
```

### چیزهایی که می‌توانید تست کنید:
1. ✅ همه variants دکمه‌ها
2. ✅ Dialog باز و بسته کردن
3. ✅ Switch on/off کردن
4. ✅ Tab ها عوض کردن
5. ✅ Dropdown menu
6. ✅ تغییر theme (Dark/Light)
7. ✅ تغییر زبان (fa/en)
8. ✅ مشاهده کدها

---

## 🎊 آماده است!

صفحه **Components Showcase** اضافه شد:

- ✅ 15 کامپوننت UI
- ✅ مثال‌های زنده
- ✅ کدهای آماده
- ✅ تعاملی و کاربردی
- ✅ دو زبانه
- ✅ Responsive

---

**از این صفحه به عنوان مرجع استفاده کنید! 🚀**

این صفحه مثل **Storybook** است ولی داخل خود اپلیکیشن! 🎨

