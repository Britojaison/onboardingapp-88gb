import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Employee Onboarding Portal",
  description: "Complete onboarding experience for new employees",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/88gb.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/88gb.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/88gb.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/88gb.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/88gb.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-background flex flex-col">
          <Navigation />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
