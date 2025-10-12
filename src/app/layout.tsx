import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { QueryProvider } from "@/providers/query-provider";
import { LanguageProvider } from "@/contexts/language-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "Admin Dashboard - Modern Admin Template",
  description:
    "A modern, beautiful admin dashboard built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui",
  keywords: ["admin", "dashboard", "next.js", "typescript", "tailwind"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} ${vazirmatn.variable} font-sans`}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <QueryProvider>{children}</QueryProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
