import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AuthProvider } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { UserDropdown } from "@/components/userDropdown";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "Your personalised interview practice platfrom",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased pattern bg-dark-300 min-h-screen`}
      >
        <AuthProvider>
          <nav className="p-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="PrepWise Logo" width={38} height={32} />
              <h2 className="text-primary-100">PrepWise</h2>
            </Link>
            <div className="flex items-center gap-4">
              <UserDropdown />
            </div>
          </nav>

          {children}
        </AuthProvider>

        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
