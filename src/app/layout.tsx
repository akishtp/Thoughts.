import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

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
        <Providers>
          <Navbar />
          <div className="w-10/12 py-10">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
