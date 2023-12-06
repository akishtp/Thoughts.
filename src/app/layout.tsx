import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const playfair_display = Playfair_Display({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${playfair_display.className} flex flex-col items-center`}
      >
        <Navbar />
        <div className="w-10/12 pt-10">{children}</div>
      </body>
    </html>
  );
}
