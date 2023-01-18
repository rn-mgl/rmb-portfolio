import "./globals.css";
import { Sora, IBM_Plex_Mono } from "@next/font/google";
import Navbar from "@/src/components/nav/navbar";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "auto",
  variable: "--font-sora",
});

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "auto",
  variable: "--font-ibm",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${ibm.variable} 
                scroll-smooth scrollbar-thin scrollbar-thumb-gry scrollbar-thumb-rounded-md`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
