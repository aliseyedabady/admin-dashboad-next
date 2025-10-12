"use client";

import { useLanguage } from "@/contexts/language-context";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Language Toggle */}
          <div className="mb-4 flex justify-center">
            <button
              onClick={() => setLanguage(language === "fa" ? "en" : "fa")}
              className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-white/50 hover:text-foreground dark:hover:bg-gray-800/50"
            >
              {language === "fa" ? "🌐 English" : "🌐 فارسی"}
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
