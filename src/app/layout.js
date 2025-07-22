import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { yekan } from "@/utils/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReactToastify from "@/configs/ReactToastify";
import ModalContainer from "@/components/layout/ModalContainer";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

import "./globals.css";

export const metadata = {
  title: "پروژه تورینو",
  description: "سایت خرید تورهای گردشگری",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekan.className}`}>
        <ReactQueryProvider>
          <Header />
          {children}
          <ModalContainer />
          <Footer />
          <ReactToastify />
          <ReactQueryDevtools />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
