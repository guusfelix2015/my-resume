import { SectionTitle } from '@/components/SectionTitle'
import { portfolio } from '@/data/portfolio'
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Image from 'next/image'

const stackThemes: Record<string, string> = {
  React: 'from-cyan-400/20 via-cyan-400/5 to-transparent',
  'Next.js': 'from-zinc-200/15 via-zinc-200/5 to-transparent',
  TypeScript: 'from-sky-500/20 via-sky-500/5 to-transparent',
  'Node.js': 'from-lime-400/20 via-lime-400/5 to-transparent',
  'Tailwind CSS': 'from-cyan-300/20 via-cyan-300/5 to-transparent',
  'Styled Components': 'from-fuchsia-400/20 via-fuchsia-400/5 to-transparent',
  GraphQL: 'from-pink-400/20 via-pink-400/5 to-transparent',
  Prisma: 'from-indigo-400/20 via-indigo-400/5 to-transparent',
  'React Query': 'from-rose-400/20 via-rose-400/5 to-transparent',
  NestJS: 'from-red-400/20 via-red-400/5 to-transparent',
  Vite: 'from-violet-400/20 via-violet-400/5 to-transparent',
  Angular: 'from-red-500/20 via-red-500/5 to-transparent',
  Python: 'from-yellow-400/20 via-blue-400/5 to-transparent',
  JavaScript: 'from-yellow-300/20 via-yellow-300/5 to-transparent',
  SQL: 'from-cyan-400/20 via-cyan-400/5 to-transparent',
  PostgreSQL: 'from-blue-400/20 via-blue-400/5 to-transparent',
  'Chakra UI': 'from-teal-400/20 via-teal-400/5 to-transparent',
  Docker: 'from-sky-400/20 via-sky-400/5 to-transparent',
  Jest: 'from-rose-500/20 via-rose-500/5 to-transparent',
  Vitest: 'from-green-400/20 via-green-400/5 to-transparent',
}

const stackLabels: Record<string, string> = {
  React: 'interfaces reativas',
  'Next.js': 'renderização moderna',
  TypeScript: 'tipagem segura',
  'Node.js': 'backend performático',
  'Tailwind CSS': 'UI veloz',
  'Styled Components': 'design system',
  GraphQL: 'camada de dados',
  Prisma: 'acesso ao banco',
  'React Query': 'cache e estado remoto',
  NestJS: 'arquitetura backend',
  Vite: 'tooling rápido',
  Angular: 'interfaces enterprise',
  Python: 'automação e dados',
  JavaScript: 'base do ecossistema',
  SQL: 'consulta e modelagem',
  PostgreSQL: 'persistência relacional',
  'Chakra UI': 'componentes acessíveis',
  Docker: 'ambiente consistente',
  Jest: 'testes unitários',
  Vitest: 'testes velozes',
}

export default function Home() {
  const { person, stats, summary, strengths, experience, stacks, education } =
    portfolio

  return (
    <main className="pb-10 pt-28 md:pt-32">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-10 shadow-2xl shadow-emerald-950/10 md:px-10 md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_28%)]" />
        <div className="absolute -left-20 top-12 size-48 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 size-56 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.45fr_0.85fr] lg:items-start">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
                Portfolio 2026
              </span>
              <span>{person.location}</span>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {person.role}
              </p>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-zinc-50 md:text-6xl md:leading-[1.05]">
                {person.name}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
                {person.headline}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={person.linkedin}
                draggable={false}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:brightness-110 active:scale-[0.98]"
                rel="noreferrer"
              >
                <LinkedInLogoIcon width={18} height={18} />
                Linkedin
              </a>
              <a
                href={person.github}
                draggable={false}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/10 active:scale-[0.98]"
                rel="noreferrer"
              >
                <GitHubLogoIcon width={18} height={18} />
                GitHub
              </a>
              <a
                href={`mailto:${person.email}`}
                draggable={false}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/10 active:scale-[0.98]"
                rel="noreferrer"
              >
                <EnvelopeClosedIcon width={18} height={18} />
                {person.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                React + Next.js
              </span>
              <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                Node.js + NestJS
              </span>
              <span className="rounded-full border border-white/10 bg-zinc-950/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
                Produto, arquitetura e UX
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-zinc-950/70 p-5">
              <Image
                src={person.avatar}
                alt={person.shortName}
                width={112}
                height={112}
                className="size-24 rounded-2xl border border-white/10 object-cover"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-zinc-50">
                  {person.shortName}
                </h2>
                <p className="text-sm leading-6 text-zinc-400">
                  React, Node.js, NestJS, TypeScript, arquitetura frontend e
                  backend para produtos digitais em escala.
                </p>
              </div>
            </div>
            <div className="grid gap-3 rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950/80 to-zinc-950/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400/90">
                Assinatura do projeto
              </p>
              <p className="text-base leading-7 text-zinc-300">
                Portfolio desenhado e desenvolvido por Gustavo Felix, com foco
                em clareza visual, narrativa profissional e atenção aos
                detalhes.
              </p>
              <p className="text-sm text-zinc-500">
                Design, conteúdo e implementação autorais.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 xl:grid-cols-4">
            {stats.map((item) => (
              <article
                key={item.label}
                className="group min-h-[220px] rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 transition duration-200 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.06]"
              >
                <p className="text-4xl font-black tracking-tight text-zinc-50">
                  {item.value}
                </p>
                <p className="mt-3 text-base leading-7 text-zinc-400 transition group-hover:text-zinc-300">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resumo" className="border-b border-white/5 py-20">
        <SectionTitle
          eyebrow="Resumo"
          title="Experiencia construindo produtos digitais com impacto real"
          description="Uma apresentacao direta das minhas principais competencias, do meu momento de carreira e da forma como contribuo em times de produto e engenharia."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {summary.map((paragraph) => (
            <article
              key={paragraph}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-base leading-8 text-zinc-300">{paragraph}</p>
            </article>
          ))}
          <div className="grid gap-4 lg:col-span-2 lg:grid-cols-3">
            {strengths.map((strength) => (
              <article
                key={strength.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/[0.05]"
              >
                <p className="text-lg font-semibold text-zinc-100 transition group-hover:text-emerald-300">
                  {strength.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-400 group-hover:text-zinc-300">
                  {strength.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className="py-20">
        <SectionTitle
          eyebrow="Experiencia"
          title="Trajetoria focada em produto, escala e qualidade de engenharia"
          description="As experiencias abaixo refletem os dados mais recentes do meu curriculo e destacam entregas, impacto e stacks utilizadas em cada contexto."
        />
        <div className="mt-8 flex items-center justify-between gap-4 lg:hidden">
          <p className="text-sm text-zinc-500">
            Role horizontalmente para navegar pelas experiências.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
            Scroll to explore
          </p>
        </div>
        <div className="mt-6 grid auto-cols-[88vw] snap-x snap-mandatory grid-flow-col gap-6 overflow-x-auto pb-4 [scrollbar-width:none] md:auto-cols-[430px] lg:grid-flow-row lg:grid-cols-1 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
          {experience.map((job, index) => (
            <article
              key={`${job.company}-${job.period}`}
              className="flex min-w-0 snap-start flex-col gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition duration-200 hover:border-white/20 hover:bg-white/[0.05] md:p-8 lg:grid lg:grid-cols-[260px_1fr] lg:gap-8"
            >
              <div className="flex items-start justify-between gap-4 lg:flex-col lg:justify-start">
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400/90">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-50">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-zinc-300">
                      {job.role}
                    </p>
                  </div>
                  <div className="text-sm leading-6 text-zinc-500">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 lg:w-fit">
                  {job.technologies.length} tecnologias
                </span>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-sm leading-7 text-zinc-300 md:text-base">
                  {job.summary}
                </p>
                <div className="grid gap-3 lg:grid-cols-3">
                  {job.highlights.slice(0, 3).map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-white/10 bg-zinc-950/50 p-4 text-sm leading-6 text-zinc-300"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {job.technologies.slice(0, 6).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                  {job.technologies.length > 6 && (
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
                      +{job.technologies.length - 6} stacks
                    </span>
                  )}
                </div>
                <details className="group rounded-2xl border border-white/10 bg-white/[0.02] p-4 open:border-emerald-400/20 open:bg-emerald-400/[0.04]">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-200 marker:hidden">
                    Ver mais detalhes da experiência
                  </summary>
                  <div className="mt-4 grid gap-3">
                    {job.highlights.slice(3).map((highlight) => (
                      <p
                        key={highlight}
                        className="text-sm leading-6 text-zinc-400"
                      >
                        {highlight}
                      </p>
                    ))}
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="stacks" className="border-b border-white/5 py-20">
        <SectionTitle
          eyebrow="Especialidades"
          title="Stack atual e contexto de atuacao"
          description="Tecnologias e ferramentas que fazem parte do meu dia a dia em projetos de frontend, backend e arquitetura de produto."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stacks.map((stack) => (
            <article
              key={stack.name}
              className={`group relative flex items-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition duration-200 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.06]`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  stackThemes[stack.name] ??
                  'from-white/10 via-white/0 to-transparent'
                } opacity-100 transition duration-200 group-hover:opacity-100`}
              />
              <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/70 p-2">
                {stack.logo ? (
                  <Image
                    src={stack.logo}
                    alt={stack.name}
                    width={28}
                    height={28}
                    className="size-7 object-contain"
                  />
                ) : (
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
                    {stack.name.slice(0, 3)}
                  </span>
                )}
              </div>
              <div className="relative z-10">
                <p className="text-sm font-semibold text-zinc-100">
                  {stack.name}
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 group-hover:text-zinc-400">
                  {stackLabels[stack.name] ?? 'tecnologia principal'}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-white/5 py-20">
        <SectionTitle
          eyebrow="Formacao"
          title={education.title}
          description="Base academica que complementa uma atuacao pragmatica em engenharia de software, produto e resolucao de problemas."
        />
        <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xl font-bold text-zinc-50">
            {education.institution}
          </p>
          <p className="mt-2 text-base text-zinc-400">{education.period}</p>
        </div>
      </section>

      <section id="contato" className="py-20">
        <div className="rounded-[2rem] border border-emerald-400/20 bg-emerald-400/[0.08] px-6 py-10 md:px-10">
          <SectionTitle
            eyebrow="Contato"
            title="Se voce procura alguem para construir produto com qualidade, clareza e senso de dono, vamos conversar"
            description="Estou aberto a oportunidades em que eu possa contribuir com arquitetura, implementacao e evolucao de plataformas modernas."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:brightness-110"
            >
              <LinkedInLogoIcon width={18} height={18} />
              Linkedin
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/60 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-950"
            >
              <GitHubLogoIcon width={18} height={18} />
              GitHub
            </a>
            <a
              href={`mailto:${person.email}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/60 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-950"
            >
              <EnvelopeClosedIcon width={18} height={18} />
              {person.email}
            </a>
          </div>
        </div>
      </section>

      <footer className="pb-6 pt-2 text-center">
        <p className="text-sm text-zinc-500">
          Desenvolvido e assinado por Gustavo Felix.
        </p>
      </footer>
    </main>
  )
}
