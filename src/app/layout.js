import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'],variable: '--font-inter', backgroundColor: 'white'})

export const metadata = {
  title: 'BMI Calculator App',
  description: 'Designed to calculate the user Body Mass Index based on their weight and height',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
