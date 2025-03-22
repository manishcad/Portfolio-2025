import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manishcad Dev Portfolio App",
  description: "The best animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<p>Loading</p>}>
          <TransitionProvider>{children}</TransitionProvider>

        </Suspense>
      </body>
    </html>
  );
}
