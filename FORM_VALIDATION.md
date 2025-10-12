# 📋 Form Validation Guide

All forms in this project use **React Hook Form** with **Yup** validation for robust, type-safe form handling.

## 🎯 Benefits

✅ **Type Safety** - Full TypeScript support  
✅ **Better Performance** - Fewer re-renders  
✅ **Easy Validation** - Declarative schema-based validation  
✅ **Error Handling** - Clear, user-friendly error messages  
✅ **Less Boilerplate** - No manual state management  

---

## 📦 Installed Packages

```bash
npm install react-hook-form @hookform/resolvers yup
```

- `react-hook-form` - Form state management
- `@hookform/resolvers` - Resolvers for validation libraries
- `yup` - Schema validation library

---

## 📄 Forms with Validation

### 1. 🔐 Login Form

**Location:** `src/app/(auth)/login/page.tsx`

**Validation Rules:**
- ✅ Email: Required, valid email format
- ✅ Password: Required, minimum 6 characters

**Schema:**
```typescript
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
```

**Features:**
- Real-time validation
- Error messages below fields
- Submit disabled during loading
- Default values for quick testing

---

### 2. 📝 Register Form

**Location:** `src/app/(auth)/register/page.tsx`

**Validation Rules:**
- ✅ Name: Required, minimum 3 characters
- ✅ Email: Required, valid email format
- ✅ Password: Required, minimum 6 characters
- ✅ Confirm Password: Required, must match password

**Schema:**
```typescript
const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});
```

**Features:**
- Password matching validation
- All fields validated on blur
- Clear error messages
- Type-safe form data

---

### 3. ⚙️ Settings Form

**Location:** `src/app/(dashboard)/settings/page.tsx`

**Validation Rules:**
- ✅ Name: Required, minimum 3 characters
- ✅ Email: Required, valid email format
- ✅ Theme: Required selection
- ✅ Notifications: Boolean values

**Schema:**
```typescript
const settingsSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  selectedTheme: yup.string().required(),
  emailNotifications: yup.boolean(),
  pushNotifications: yup.boolean(),
});
```

**Features:**
- Multiple form sections
- Theme selection persistence
- Switch components integrated
- Auto-save on submit

---

### 4. 👤 Profile Form

**Location:** `src/app/(dashboard)/profile/page.tsx`

**Two Separate Forms:**

#### General Info Form

**Validation Rules:**
- ✅ Name: Required, minimum 3 characters
- ✅ Email: Required, valid email format
- ✅ Phone: Optional, valid phone format
- ✅ Location: Optional

**Schema:**
```typescript
const profileSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
      "Invalid phone number"
    )
    .nullable(),
  location: yup.string().nullable(),
});
```

#### Security Form

**Validation Rules:**
- ✅ Current Password: Required
- ✅ New Password: Required, minimum 6 characters
- ✅ Confirm Password: Required, must match new password

**Schema:**
```typescript
const securitySchema = yup.object().shape({
  currentPassword: yup.string().required("Current password is required"),
  newPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("New password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm your password"),
});
```

**Features:**
- Two independent forms in tabs
- Phone number regex validation
- Form reset after password update
- Success notifications

---

## 🔨 Usage Example

### Basic Setup

```typescript
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// 1. Define schema
const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).required("Password is required"),
});

// 2. Infer type from schema
type FormData = yup.InferType<typeof schema>;

// 3. Setup form
export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 4. Submit handler
  const onSubmit = async (data: FormData) => {
    // Handle form submission
    console.log(data);
  };

  // 5. Render form
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}
      
      <Input type="password" {...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}
      
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
}
```

---

## 📚 Common Validation Rules

### String Validations

```typescript
yup.string()
  .required("This field is required")
  .min(3, "Minimum 3 characters")
  .max(50, "Maximum 50 characters")
  .email("Invalid email address")
  .matches(/regex/, "Custom message")
  .url("Must be a valid URL")
  .lowercase("Must be lowercase")
  .uppercase("Must be uppercase")
  .trim("No whitespace")
```

### Number Validations

```typescript
yup.number()
  .required("This field is required")
  .min(0, "Must be positive")
  .max(100, "Maximum 100")
  .positive("Must be positive")
  .negative("Must be negative")
  .integer("Must be an integer")
```

### Boolean & Other

```typescript
yup.boolean()
yup.date().min(new Date(), "Must be in future")
yup.mixed().nullable()
yup.mixed().oneOf(["option1", "option2"])
```

### Conditional Validation

```typescript
yup.string().when("otherField", {
  is: (value: string) => value === "specific",
  then: (schema) => schema.required("Required when other field is specific"),
  otherwise: (schema) => schema.nullable(),
})
```

### Password Confirmation

```typescript
confirmPassword: yup
  .string()
  .oneOf([yup.ref("password")], "Passwords must match")
  .required("Please confirm password")
```

---

## 🎨 Error Display

All forms display errors consistently:

```tsx
{errors.fieldName && (
  <p className="text-sm text-destructive">
    {errors.fieldName.message}
  </p>
)}
```

**Styling:**
- Red text (`text-destructive`)
- Small font (`text-sm`)
- Appears below the input field
- Only shows when error exists

---

## 💡 Best Practices

1. ✅ **Always use TypeScript** - Infer types from schema
2. ✅ **Provide clear error messages** - User-friendly text
3. ✅ **Set default values** - Better UX
4. ✅ **Disable submit during loading** - Prevent double submission
5. ✅ **Validate on blur** - Better performance
6. ✅ **Keep schemas close to components** - Easier to maintain
7. ✅ **Use nullable() for optional fields** - Proper null handling
8. ✅ **Reset form after success** - Clean state

---

## 🔍 Debugging

### Check form state:

```typescript
const { watch } = useForm();
console.log(watch()); // Log all form values
```

### Check errors:

```typescript
console.log(errors); // Log all errors
```

### Check if form is valid:

```typescript
const { formState: { isValid } } = useForm();
console.log(isValid);
```

---

## 📖 Resources

- [React Hook Form Docs](https://react-hook-form.com/)
- [Yup Docs](https://github.com/jquense/yup)
- [@hookform/resolvers](https://github.com/react-hook-form/resolvers)

---

## ✨ Summary

All forms now have:
- ✅ Type-safe validation
- ✅ Real-time error messages
- ✅ Better user experience
- ✅ Less boilerplate code
- ✅ Consistent error handling
- ✅ Proper TypeScript types

**Forms Updated:**
1. Login form
2. Register form
3. Settings form
4. Profile form (2 forms in tabs)

All forms are production-ready! 🎉

