import "~/styles/globals.css";

import { Poppins } from "next/font/google";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaleb H • Dev Web",
  description: "Kaleb Henrique, dev web fullstack react",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" className={`${poppins.variable}`}>
      <body className="font-poppins bg-cinza-fundo text-[13px] font-semibold text-violeta-base">
        <div className="mx-auto">{children}</div>
      </body>
    </html>
  );
}
