import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { ThemeProvider } from 'app/components/theme-provider'
import { ThemeToggle } from 'app/components/theme-toggle'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Parsa Bahrami',
    template: '%s | Parsa Bahrami',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'Parsa Bahrami',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'Parsa Bahrami',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cx(
        'bg-skin-fill text-skin-base transition-colors duration-300',
        GeistSans.variable,
        GeistMono.variable
      )}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <main className="antialiased max-w-5xl mx-4 mt-8 lg:mx-auto">
            <div className="flex justify-between items-center mb-8">
              <Navbar />
              <ThemeToggle />
            </div>
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
