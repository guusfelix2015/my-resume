import Link from 'next/link'

export default function About() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center py-32">
      <div className="max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center">
        <h1 className="text-3xl font-bold text-zinc-50">Sobre</h1>
        <p className="mt-4 text-base leading-8 text-zinc-400">
          O portfolio principal agora foi consolidado na home com os dados mais
          recentes do curriculo, incluindo resumo, experiencias, stacks e
          contato.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:brightness-110"
        >
          Voltar para a pagina inicial
        </Link>
      </div>
    </main>
  )
}
