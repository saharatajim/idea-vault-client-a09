import { Roboto } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-robot-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "IdeaVault – Scale Your Vision Instantly",
  description: "Connect with innovators, builders, and co-founders to grow your startup ideas transparently.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${robotoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
