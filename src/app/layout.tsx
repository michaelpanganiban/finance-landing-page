import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { Stack } from '@mui/material'
import ThemeRegistry from '../components/theme/ThemeRegistry'
import Header from '../components/header/page'
import NavBar from '../components/navigation/page'
import { Home } from '../components/carousel/page'
import { Services } from '../components/services/page'
import { Projects } from '../components/projects/page'
import { ContactUs } from '../components/contact/page'

export const metadata: Metadata = {
  title: 'Bookkeeping',
  description: 'Hello there',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <Stack>
            {children}
          </Stack>
          <Header />
          <NavBar />
          <Home />
          <Services />
          <Projects />
          <ContactUs />
        </body>
      </ThemeRegistry>
    </html>
  )
}
