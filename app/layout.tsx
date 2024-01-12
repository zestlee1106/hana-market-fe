import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./store/providers";
import ModalContainer from "./components/ModalContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "뚱인데요",
  description: "하나하나가 뚱이다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={`${inter.className} min-h-[100vh] flex justify-center`}
        >
          {children}
        </body>
        <ModalContainer />
      </html>
    </Providers>
  );
}
