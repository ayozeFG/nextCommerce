import './globals.css'
import type { Metadata } from 'next'
import ThemeRegistry from '@/components/themeRegistry/ThemeRegistry'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'Palitos app',
    description: 'Some description',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
    return (
        <html lang="es">
            <body>
                <ThemeRegistry>
                    {/* <div className='main'> */}
                    <div>
                        {children}
                    </div>
                </ThemeRegistry>
            </body>
        </html>
    )
}
