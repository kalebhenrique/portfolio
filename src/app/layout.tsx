import "~/styles/globals.css";

import { Poppins } from "next/font/google";
import { type Metadata } from "next";
import { Suspense } from "react";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import Loading from "~/components/loading";

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
    <html lang="pt-br" className={`${poppins.variable} root-scrollbar`}>
      <body className="custom-scrollbar font-poppins text-[14px] font-semibold text-violeta-base">
        <Suspense fallback={<Loading />}>
          <Navbar />
          <div className="mx-auto">{children}</div>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
