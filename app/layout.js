import "./globals.css";
import Link from "next/link";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
  
    <html lang="en">
      <body>
      <nav>
        <ul>
        <li><Link href="/">Home</Link></li>
            <li><Link href="/quienes">Quiénes Somos</Link></li>
            <li><Link href="/reservas">Reservas</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      {children}
      </body>
    </html>
  )}

