import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"] 
});

export const metadata = {
  title: "Todo App",
  description: "Assessment task by Learnyst",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          {children}
      </body>
    </html>
  );
}
