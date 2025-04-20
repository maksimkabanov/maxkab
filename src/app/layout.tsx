import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Maksim Kabanov | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with over 15 years of experience delivering enterprise-grade applications across finance, analytics, and infrastructure.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Barcelona",
  ],
  authors: [{ name: "Maksim Kabanov" }],
  creator: "Maksim Kabanov",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maxkab.com",
    title: "Maksim Kabanov | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with over 15 years of experience delivering enterprise-grade applications.",
    siteName: "Maksim Kabanov Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maksim Kabanov | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with over 15 years of experience delivering enterprise-grade applications.",
    creator: "@maksimkabanov",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-white dark:bg-gray-900 shadow-sm">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <Link
                  href="/"
                  className="text-xl font-bold text-gray-800 dark:text-white"
                >
                  Maksim Kabanov
                </Link>
                <div className="space-x-6">
                  <Link
                    href="/experience"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Experience
                  </Link>
                  <Link
                    href="/projects"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </nav>
          </header>

          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          <footer className="bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center">
                <p className="text-gray-600 dark:text-gray-300">
                  © {new Date().getFullYear()} Maksim Kabanov. All rights
                  reserved.
                </p>
                <div className="space-x-4">
                  <a
                    href="https://github.com/maksimkabanov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/maksimkabanov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
