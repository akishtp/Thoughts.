import "@/app/ui/globals.css";
import { playfair_display } from "@/app/ui/fonts";
import Navbar from "./ui/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${playfair_display.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
