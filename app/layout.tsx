import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./components/theme/Providers";
import Sidebar from "./components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="bg-white dark:bg-black">
            <div className="flex flex-row h-screen lg:max-w-7xl md:max-w-xl mx-auto px-2  sm:px-0 ">
              <Sidebar />
              {children}
              <div className="flex-[1_1_25%] flex flex-col border-l-[0.5px] border-gray-400">
                <h1 className="w-full">Coming soon...</h1>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
