import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import SparklesIcon from "@/components/SparklesIcon";
import { LinkedinIcon, LucideGithub } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

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
      <body
        className={
          inter.className +
          " bg-gray-900 min-h-screen text-white"
        }
      >
        <main className="p-4 max-w-2xl mx-auto">
          <header className="flex justify-between my-2 sm:my-8">
            <Link href="/" className="flex gap-1">
              <SparklesIcon />
              <span>captionMe.</span>
            </Link>
            <nav className="flex items-center gap-2 sm:gap-6 text-white/80 text-sm sm:text-bas">
              <Link href="/">Home</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="mailto:ameyshri051@gmail.com">Contact</Link>
              <Link
                href="https://github.com/ameya051"
                className="after:content-['_Star on github']"
              >
                Github
              </Link>
            </nav>
          </header>
          {children}
          <footer className="p-4 pb-2 max-w-2xl mx-auto ">
            <div className="flex justify-between my-2 sm:my-8">
              <h4>
                Build by{" "}
                <Link
                  className="hover:underline"
                  href="https://twitter.com/ameyaidk"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ameya
                </Link>
                , with the help of{" "}
                <Link className="hover:underline" href="https://nextjs.org/">
                  Nextjs
                </Link>
              </h4>
              <div className="flex ic jc gap-2">
                <Link href="https://www.linkedin.com/in/ameyashrivastava/">
                  <LinkedinIcon className="w-5 h-5 text-white" />
                </Link>
                <Link href="https://github.com/ameya051">
                  <LucideGithub className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
            <h5>
              If you like Caption Me, Please give it a star on{" "}
              <Link
                href="https://github.com/ameya051"
                className="after:content-['_Star on github'] text-zinc-700 font-bold"
              >
                Github
              </Link>
            </h5>
          </footer>
        </main>
      </body>
    </html>
  );
}
