import { ReactNode } from 'react'
import '../styles/globals.css'
import { Lato } from 'next/font/google'
import { Header } from '@/components/Header'
import Providers from './Provider'

export const metadata = {
  title: 'Gustavo Felix | Desenvolvedor Full Stack',
  description:
    'Portfolio de Gustavo Felix, desenvolvedor full stack com foco em React, Node.js, NestJS, TypeScript e produtos escalaveis.',
}

const lato = Lato({
  weight: ['400', '300', '100', '700', '900'],
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`scroll-pt-32 scroll-smooth ${lato.className}`}
    >
      <body className="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-300">
        <Providers>
          <Header />
          <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
