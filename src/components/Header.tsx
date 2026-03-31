import Link from 'next/link'
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid'

export function Header() {
  const navigation = [
    { href: '/#resumo', label: 'Resumo' },
    { href: '/#experiencia', label: 'Experiencia' },
    { href: '/#stacks', label: 'Stacks' },
    { href: '/#contato', label: 'Contato' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-zinc-950/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center justify-start gap-3">
          <CodeBracketSquareIcon
            width={28}
            height={28}
            className="text-emerald-400"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500 max-sm:hidden">
              Portfolio
            </span>
            <span className="text-lg font-extrabold text-zinc-100">
              Gustavo Felix
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
