# 🌐 سیستم دو زبانه (فارسی/انگلیسی)

## ✨ ویژگی‌ها

- ✅ **دو زبانه کامل**: فارسی و انگلیسی
- ✅ **پشتیبانی RTL**: تغییر خودکار جهت متن
- ✅ **فونت فارسی**: Vazirmatn از Google Fonts
- ✅ **ذخیره‌سازی**: زبان انتخابی در localStorage
- ✅ **تغییر آسان**: یک کلیک در navbar
- ✅ **دیفالت فارسی**: زبان پیش‌فرض فارسی است

---

## 📁 ساختار فایل‌ها

```
src/
├── locales/
│   ├── fa.ts           # ترجمه‌های فارسی
│   └── en.ts           # ترجمه‌های انگلیسی
│
├── contexts/
│   └── language-context.tsx   # Context زبان
│
└── app/
    ├── layout.tsx             # تنظیم فونت‌ها و RTL
    └── globals.css            # استایل‌های RTL
```

---

## 🚀 نحوه استفاده

### 1. در کامپوننت‌ها

```tsx
import { useLanguage } from "@/contexts/language-context";

function MyComponent() {
  const { t, language, setLanguage, dir } = useLanguage();

  return (
    <div>
      <h1>{t.nav.dashboard}</h1>
      <p>{t.dashboard.welcome}</p>
      
      {/* تغییر زبان */}
      <button onClick={() => setLanguage(language === "fa" ? "en" : "fa")}>
        {language === "fa" ? "English" : "فارسی"}
      </button>
    </div>
  );
}
```

### 2. دسترسی به ترجمه‌ها

```tsx
const { t } = useLanguage();

// Navigation
t.nav.dashboard        // "داشبورد" یا "Dashboard"
t.nav.users           // "کاربران" یا "Users"

// Dashboard
t.dashboard.welcome   // "خوش آمدید" یا "Welcome back"
t.dashboard.totalSales // "کل فروش" یا "Total Sales"

// Common
t.common.save         // "ذخیره" یا "Save"
t.common.cancel       // "لغو" یا "Cancel"
```

### 3. بررسی جهت متن (RTL/LTR)

```tsx
const { dir } = useLanguage();

// استفاده شرطی
{dir === "rtl" ? "راست به چپ" : "Left to Right"}

// در className
className={dir === "rtl" ? "mr-4" : "ml-4"}
```

---

## 📝 افزودن ترجمه جدید

### 1. در فایل `src/locales/fa.ts`:

```typescript
export const fa = {
  // ... ترجمه‌های موجود
  
  myNewSection: {
    title: "عنوان جدید",
    description: "توضیحات جدید",
  },
};
```

### 2. در فایل `src/locales/en.ts`:

```typescript
export const en = {
  // ... existing translations
  
  myNewSection: {
    title: "New Title",
    description: "New Description",
  },
};
```

### 3. استفاده:

```tsx
{t.myNewSection.title}
{t.myNewSection.description}
```

---

## 🎨 استایل‌های RTL

### CSS خودکار

فایل `globals.css` شامل قوانین خودکار برای RTL است:

```css
/* RTL Support */
[dir="rtl"] {
  font-family: var(--font-vazirmatn), sans-serif;
}

[dir="ltr"] {
  font-family: var(--font-inter), sans-serif;
}

/* RTL Spacing Adjustments */
[dir="rtl"] .space-x-2 > :not([hidden]) ~ :not([hidden]) {
  margin-right: 0.5rem;
  margin-left: 0;
}
```

### کلاس‌های شرطی

برای تنظیمات خاص از جهت استفاده کنید:

```tsx
const { dir } = useLanguage();

<div className={cn(
  "flex items-center",
  dir === "rtl" ? "mr-4" : "ml-4"
)}>
  محتوا
</div>
```

---

## 🔄 تغییر زبان پیش‌فرض

اگر می‌خواهید زبان پیش‌فرض را تغییر دهید:

### در `language-context.tsx`:

```tsx
// برای دیفالت فارسی (فعلی)
const [language, setLanguageState] = useState<Language>("fa");

// برای دیفالت انگلیسی
const [language, setLanguageState] = useState<Language>("en");
```

### در `layout.tsx`:

```tsx
// برای دیفالت فارسی
<html lang="fa" dir="rtl" suppressHydrationWarning>

// برای دیفالت انگلیسی
<html lang="en" dir="ltr" suppressHydrationWarning>
```

---

## 🌍 افزودن زبان سوم

### 1. ایجاد فایل ترجمه:

```typescript
// src/locales/ar.ts
export const ar = {
  nav: {
    dashboard: "لوحة القيادة",
    // ...
  },
};
```

### 2. به‌روزرسانی Context:

```typescript
// language-context.tsx
type Language = "fa" | "en" | "ar";

const translations = 
  language === "fa" ? fa : 
  language === "en" ? en : 
  ar;
```

### 3. به‌روزرسانی UI:

```tsx
// navbar.tsx
<Button onClick={() => {
  const langs: Language[] = ["fa", "en", "ar"];
  const current = langs.indexOf(language);
  const next = (current + 1) % langs.length;
  setLanguage(langs[next]);
}}>
  {language}
</Button>
```

---

## 📦 بخش‌های ترجمه شده

✅ **Sidebar**: همه منوها  
✅ **Navbar**: جستجو، پروفایل، خروج  
✅ **Login/Register**: فرم‌های ورود و ثبت‌نام  
✅ **Dashboard**: آمار، نمودار، جدول  
✅ **Users**: جدول کاربران و فیلترها  
✅ **Orders**: لیست سفارشات  
✅ **Reports**: گزارش‌ها  
✅ **Analytics**: تحلیل‌های دقیق  
✅ **Notifications**: مرکز اعلان‌ها  
✅ **Profile**: پروفایل کاربر  
✅ **Settings**: تنظیمات  

---

## 🎯 نکات مهم

### 1. استفاده از Hook

همیشه از `useLanguage` در کامپوننت‌های client استفاده کنید:

```tsx
"use client";

import { useLanguage } from "@/contexts/language-context";
```

### 2. فونت‌ها

- **فارسی**: Vazirmatn (وزیر متن)
- **انگلیسی**: Inter

### 3. جهت متن

- جهت به طور خودکار با تغییر زبان عوض می‌شود
- HTML attribute `dir` به‌روز می‌شود

### 4. ذخیره‌سازی

- زبان انتخابی در `localStorage` ذخیره می‌شود
- در بار بعدی همان زبان بارگذاری می‌شود

---

## 🐛 رفع مشکلات

### زبان عوض نمی‌شود

1. مطمئن شوید `LanguageProvider` در layout اضافه شده
2. بررسی کنید component از `"use client"` استفاده کند
3. کنسول browser را برای خطاها چک کنید

### فونت فارسی نمایش داده نمی‌شود

1. مطمئن شوید Vazirmatn در layout import شده
2. بررسی کنید CSS variables به درستی تنظیم شده‌اند
3. کش browser را پاک کنید

### RTL کار نمی‌کند

1. بررسی کنید attribute `dir` در HTML تنظیم شده
2. مطمئن شوید CSS rules در globals.css موجود هستند
3. Tailwind را rebuild کنید

---

## 📚 مثال کامل

```tsx
"use client";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";

export function MyPage() {
  const { t, language, setLanguage, dir } = useLanguage();

  return (
    <div className="space-y-6">
      {/* عنوان */}
      <h1 className="text-3xl font-bold">{t.dashboard.title}</h1>

      {/* توضیحات */}
      <p className="text-muted-foreground">{t.dashboard.subtitle}</p>

      {/* دکمه با استایل RTL */}
      <Button
        className={dir === "rtl" ? "mr-4" : "ml-4"}
        onClick={() => setLanguage(language === "fa" ? "en" : "fa")}
      >
        {language === "fa" ? "Switch to English" : "تغییر به فارسی"}
      </Button>

      {/* محتوا با جهت صحیح */}
      <div className={`flex items-center ${dir === "rtl" ? "flex-row-reverse" : "flex-row"}`}>
        <span>{t.common.save}</span>
        <span>{t.common.cancel}</span>
      </div>
    </div>
  );
}
```

---

## ✨ ویژگی‌های آینده

برای توسعه بیشتر می‌توانید:

- ✅ Date/Time formatting بر اساس زبان
- ✅ Number formatting (اعداد فارسی/انگلیسی)
- ✅ Currency formatting
- ✅ Plural rules
- ✅ Dynamic imports برای ترجمه‌ها

---

**همه چیز آماده است! اپلیکیشن شما حالا دو زبانه است! 🎉**

