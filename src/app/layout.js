import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer/>
          </ThemeProvider>
      </body>
    </html>
  );
}
