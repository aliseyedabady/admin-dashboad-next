"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { mockAuth } from "@/lib/auth";
import { useTheme } from "@/hooks/use-theme";
import { useLanguage } from "@/contexts/language-context";
import { Save } from "lucide-react";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTheme, setSelectedTheme] = useState(theme || "system");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const user = mockAuth.getUser();
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    // Apply theme
    setTheme(selectedTheme);

    // Simulate save
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Update user in localStorage
    const user = mockAuth.getUser();
    if (user) {
      localStorage.setItem("user", JSON.stringify({ ...user, name, email }));
    }

    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t.settings.title}</h1>
        <p className="text-muted-foreground">{t.settings.subtitle}</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle>{t.settings.profile}</CardTitle>
            <CardDescription>{t.settings.profileDesc}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t.profile.fullName}</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.profile.fullName}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t.profile.email}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.profile.email}
              />
            </div>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <CardTitle>{t.settings.appearance}</CardTitle>
            <CardDescription>{t.settings.appearanceDesc}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="theme">{t.settings.theme}</Label>
              <Select
                id="theme"
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
              >
                <option value="light">{t.settings.light}</option>
                <option value="dark">{t.settings.dark}</option>
                <option value="system">{t.settings.system}</option>
              </Select>
              <p className="text-muted-foreground text-sm">
                {t.settings.themeDesc}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle>{t.settings.notifications}</CardTitle>
            <CardDescription>{t.settings.notificationsDesc}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>{t.settings.emailNotifications}</Label>
                <p className="text-muted-foreground text-sm">
                  {t.settings.emailNotificationsDesc}
                </p>
              </div>
              <Switch
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>{t.settings.pushNotifications}</Label>
                <p className="text-muted-foreground text-sm">
                  {t.settings.pushNotificationsDesc}
                </p>
              </div>
              <Switch
                checked={pushNotifications}
                onCheckedChange={setPushNotifications}
              />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button type="submit" disabled={saving}>
            <Save className="mr-2 h-4 w-4" />
            {saving ? t.settings.saving : t.settings.saveChanges}
          </Button>
        </div>
      </form>
    </div>
  );
}
