import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/sonner";
import ProtectedRouteProvider from "@/providers/ProtectedRouteProvider";

const noto_sans = Noto_Sans({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "CaptionMe - Just add captions",
  description:
    "Caption me is an app which let you add captions/ subtitles to you video and download it as well.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto_sans.className} antialiased`}>
        {/* <Navbar /> */}
        <ReactQueryProvider>
          {/* <ProtectedRouteProvider> */}
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <TooltipProvider>{children}</TooltipProvider>
              <Toaster />
            </ThemeProvider>
          {/* </ProtectedRouteProvider> */}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
