import { UnifrakturMaguntia, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"; // Assuming you have the header
import Footer from "@/components/footer"; // IMPORT THE FOOTER

const inter = Inter({ subsets: ["latin"] });

const davenportFont = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-davenport",
});

export const metadata = {
  title: "The Daily News",
  description: "A Davenport newspaper project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${davenportFont.variable} bg-white`}>
        <Header />
        {children}
        <Footer /> {/* ADD THE FOOTER HERE */}
      </body>
    </html>
  );
}