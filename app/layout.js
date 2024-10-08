import { Inter } from "next/font/google";
import "./globals.css";
import { Web3Modal } from "../context/web3modal";

export const metadata = {
  title: 'OneWallet',
  description: 'Effortless Web3 access with social logins and seamless crypto purchases.',
};


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3Modal>
        {children}
        </Web3Modal>
      </body>
    </html>
  );
}
