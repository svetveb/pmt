import { type ReactNode } from 'react'
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from '../components/Footer';
import { NavigationMenu } from '../components/NavigationMenu';
import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider attribute="class">
          <div className="min-h-screen flex flex-col">
            <NavigationMenu />
            <div className="flex-grow">
              <Header />
              <main className="container mx-auto px-4 py-8">
                {children}
              </main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}