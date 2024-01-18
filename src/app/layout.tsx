import type { Metadata } from 'next'

import './globals.css'
import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Be Movie',
  description: 'Be your own movie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>

      <body className={inter.className}>
        {children}
      </body>
      </UserProvider>
    </html>

  )
}
