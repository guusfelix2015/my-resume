import { portfolio } from '@/data/portfolio'

export default function Projects() {
  return (
    <main className="pb-24 pt-32">
      <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400/90">
          Projetos
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-50">
          O foco atual do portfolio esta na experiencia profissional
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400">
          Como sua trajetoria recente traz entregas com escala, impacto e
          contexto de produto mais fortes, a home passou a concentrar a
          narrativa principal. Se quiser, na proxima etapa eu posso transformar
          esta pagina em uma vitrine curada com projetos pessoais, contribuicoes
          open source e estudos relevantes do GitHub.
        </p>
        <a
          href={portfolio.person.github}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full border border-white/10 bg-zinc-950 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-900"
        >
          Ver GitHub
        </a>
      </section>
    </main>
  )
}
