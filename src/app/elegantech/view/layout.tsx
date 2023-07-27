import '@/app/globals.css'
import './view.css'
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import { Caveat } from "next/font/google";

const caveat = Caveat({subsets:['latin']})

export const metadata: Metadata = {
  title: 'ForkLoveIt View',
  description: 'Painel de Exibicao para o ForkLift.',
}

export default function ViewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={caveat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
