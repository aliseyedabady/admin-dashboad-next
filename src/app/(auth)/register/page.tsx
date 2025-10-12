"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockAuth } from "@/lib/auth";
import { useLanguage } from "@/contexts/language-context";
import { UserPlus } from "lucide-react";

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

type RegisterFormData = yup.InferType<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError: setFormError,
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      confirmPassword: "123456",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    const result = await mockAuth.register(data.name, data.email, data.password);

    if (result.success) {
      router.push("/dashboard");
    } else {
      setFormError("root", {
        message: result.error || "Registration failed",
      });
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <div className="mb-4 flex items-center justify-center">
          <div className="rounded-full bg-primary p-3">
            <UserPlus className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
        <CardTitle className="text-center text-2xl">
          {t.auth.register.title}
        </CardTitle>
        <CardDescription className="text-center">
          {t.auth.register.subtitle}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          {errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {errors.root.message}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="name">{t.auth.register.name}</Label>
            <Input
              id="name"
              type="text"
              placeholder={t.auth.register.name}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t.auth.register.email}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t.auth.register.email}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">{t.auth.register.password}</Label>
            <Input
              id="password"
              type="password"
              placeholder={t.auth.register.password}
              {...register("password")}
            />
            {errors.password && (
              <p className="text-sm text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">{t.auth.register.confirmPassword}</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder={t.auth.register.confirmPassword}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-destructive">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t.auth.register.creatingAccount : t.auth.register.createAccount}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            {t.auth.register.haveAccount}{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              {t.auth.register.signIn}
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
