import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "me.yeatz - Portfolio",
    template: "%s | me.yeatz",
  },
  description: "Full-stack developer crafting web applications and sharing creative projects",
  openGraph: {
    title: "me.yeatz - Portfolio",
    description:
      "Full-stack developer crafting web applications and sharing creative projects",
    url: "https://yeatz-portfolio.vercel.app",
    siteName: "me.yeatz",
    images: [
      {
        url: "https://yeatz-portfolio.vercel.app/Apps icon.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "me.yeatz",
    card: "summary_large_image",
  },
  icons: {
    icon: "/Apps icon.png",
    shortcut: "/Apps icon.png",
    apple: "/Apps icon.png",
  },
  manifest: "/manifest.json",
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
