"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { mockAuth } from "@/lib/auth";
import { User, Mail, Phone, MapPin, Calendar, CheckCircle2 } from "lucide-react";

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
    .matches(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
      "Invalid phone number"
    )
    .optional(),
  location: yup.string().optional(),
});

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

interface ProfileFormData {
  name: string;
  email: string;
  phone?: string;
  location?: string;
}

interface SecurityFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register: registerProfile,
    handleSubmit: handleProfileSubmit,
    setValue,
    formState: { errors: profileErrors, isSubmitting: isProfileSubmitting },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileSchema) as any,
  });

  const {
    register: registerSecurity,
    handleSubmit: handleSecuritySubmit,
    reset: resetSecurity,
    formState: { errors: securityErrors, isSubmitting: isSecuritySubmitting },
  } = useForm<SecurityFormData>({
    resolver: yupResolver(securitySchema) as any,
  });

  useEffect(() => {
    const userData = mockAuth.getUser();
    if (userData) {
      setUser(userData);
      setValue("name", userData.name);
      setValue("email", userData.email);
    }
  }, [setValue]);

  const onProfileSubmit = async (data: ProfileFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const updatedUser = { ...user, name: data.name, email: data.email };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const onSecuritySubmit = async (_data: SecurityFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    resetSecurity();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">
          Manage your profile and account settings
        </p>
      </div>

      {showSuccess && (
        <Alert variant="success">
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>Profile updated successfully!</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Card */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <Avatar className="h-32 w-32">
              <AvatarFallback className="bg-primary text-3xl text-primary-foreground">
                {user ? getInitials(user.name) : "U"}
              </AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-lg font-semibold">{user?.name}</h3>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
            <Badge>Admin User</Badge>
            <Button variant="outline" className="w-full">
              Change Avatar
            </Button>
          </CardContent>
        </Card>

        {/* Details Card */}
        <Card className="md:col-span-2">
          <Tabs defaultValue="general">
            <CardHeader>
              <TabsList>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="general" className="space-y-4">
                <form
                  onSubmit={handleProfileSubmit(onProfileSubmit)}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        {...registerProfile("name")}
                        className="pl-10"
                      />
                    </div>
                    {profileErrors.name && (
                      <p className="text-sm text-destructive">
                        {profileErrors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        {...registerProfile("email")}
                        className="pl-10"
                      />
                    </div>
                    {profileErrors.email && (
                      <p className="text-sm text-destructive">
                        {profileErrors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        {...registerProfile("phone")}
                        placeholder="+1 (555) 000-0000"
                        className="pl-10"
                      />
                    </div>
                    {profileErrors.phone && (
                      <p className="text-sm text-destructive">
                        {profileErrors.phone.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="location"
                        {...registerProfile("location")}
                        placeholder="San Francisco, CA"
                        className="pl-10"
                      />
                    </div>
                    {profileErrors.location && (
                      <p className="text-sm text-destructive">
                        {profileErrors.location.message}
                      </p>
                    )}
                  </div>
                  <Button type="submit" className="w-full" disabled={isProfileSubmitting}>
                    {isProfileSubmitting ? "Saving..." : "Save Changes"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="security" className="space-y-4">
                <form
                  onSubmit={handleSecuritySubmit(onSecuritySubmit)}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input
                      id="current-password"
                      type="password"
                      placeholder="Enter current password"
                      {...registerSecurity("currentPassword")}
                    />
                    {securityErrors.currentPassword && (
                      <p className="text-sm text-destructive">
                        {securityErrors.currentPassword.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      placeholder="Enter new password"
                      {...registerSecurity("newPassword")}
                    />
                    {securityErrors.newPassword && (
                      <p className="text-sm text-destructive">
                        {securityErrors.newPassword.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm new password"
                      {...registerSecurity("confirmPassword")}
                    />
                    {securityErrors.confirmPassword && (
                      <p className="text-sm text-destructive">
                        {securityErrors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                  <Button type="submit" className="w-full" disabled={isSecuritySubmitting}>
                    {isSecuritySubmitting ? "Updating..." : "Update Password"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="activity" className="space-y-4">
                <div className="space-y-4">
                  {[
                    {
                      action: "Logged in",
                      date: "Today at 9:42 AM",
                      device: "Chrome on MacOS",
                    },
                    {
                      action: "Profile updated",
                      date: "Yesterday at 4:12 PM",
                      device: "Safari on iPhone",
                    },
                    {
                      action: "Password changed",
                      date: "3 days ago",
                      device: "Chrome on Windows",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 rounded-lg border p-4"
                    >
                      <Calendar className="mt-1 h-5 w-5 text-muted-foreground" />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{item.action}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.date}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.device}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}

