import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Peugeot dashboard',
  description: 'Dashboard peugeot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
