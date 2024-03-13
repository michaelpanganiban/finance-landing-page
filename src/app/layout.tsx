import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { Stack } from '@mui/material'
import ThemeRegistry from '../components/theme/ThemeRegistry'
import Head from 'next/head'
import Header from '../components/header/page'

export const metadata: Metadata = {
  title: 'Bookkeeping',
  description: 'Hello there',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <Stack>{children}</Stack>
          <Header />  
        </body>
      </ThemeRegistry>

    </html>
  )
}