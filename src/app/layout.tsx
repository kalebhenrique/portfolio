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

const CustomScrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(255,255,255,0.2);
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255,255,255,0.3);
  }
`;

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
      <body className="custom-scrollbar bg-cinza-fundo font-poppins text-[14px] font-semibold text-violeta-base">
        <style>{CustomScrollbarStyles}</style>
        <Suspense fallback={<Loading />}>
          <Navbar />
          <div className="mx-auto">{children}</div>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
