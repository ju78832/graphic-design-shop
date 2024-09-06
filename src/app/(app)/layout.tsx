import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={inter.className}>
      <div className="relative w-full flex items-center justify-center ">
        <Navbar />
      </div>
      {children}
    </body>
  );
}
