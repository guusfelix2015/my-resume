import { SectionTitle } from '@/components/SectionTitle'
import { portfolio } from '@/data/portfolio'
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Image from 'next/image'

export default function Home() {
  const { person, stats, summary, strengths, experience, stacks, education } =
    portfolio

  return (
    <main className="pb-24 pt-28 md:pt-32">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-10 shadow-2xl shadow-emerald-950/10 md:px-10 md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_28%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.45fr_0.85fr] lg:items-start">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-emerald-300">
                Disponivel para novos desafios
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
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
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
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {stats.map((item) => (
                <article
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-3xl font-black tracking-tight text-zinc-50">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {item.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="resumo"
        className="grid gap-8 border-b border-white/5 py-20 lg:grid-cols-[1fr_0.9fr]"
      >
        <SectionTitle
          eyebrow="Resumo"
          title="Experiencia construindo produtos digitais com impacto real"
          description="Uma apresentacao direta das minhas principais competencias, do meu momento de carreira e da forma como contribuo em times de produto e engenharia."
        />
        <div className="flex flex-col gap-6">
          {summary.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-zinc-300">
              {paragraph}
            </p>
          ))}
          <div className="grid gap-3 pt-2">
            {strengths.map((strength) => (
              <div
                key={strength}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-300"
              >
                {strength}
              </div>
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
        <div className="mt-12 flex flex-col gap-6">
          {experience.map((job, index) => (
            <article
              key={`${job.company}-${job.period}`}
              className="grid gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:grid-cols-[240px_1fr]"
            >
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
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  {job.highlights.map((highlight) => (
                    <p
                      key={highlight}
                      className="text-sm leading-7 text-zinc-300 md:text-base"
                    >
                      {highlight}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="stacks"
        className="grid gap-8 border-b border-white/5 py-20 lg:grid-cols-[1fr_1fr]"
      >
        <SectionTitle
          eyebrow="Especialidades"
          title="Stack atual e contexto de atuacao"
          description="Tecnologias e ferramentas que fazem parte do meu dia a dia em projetos de frontend, backend e arquitetura de produto."
        />
        <div className="flex flex-wrap gap-3">
          {stacks.map((stack) => (
            <span
              key={stack}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-zinc-200"
            >
              {stack}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-b border-white/5 py-20 lg:grid-cols-[1fr_0.9fr]">
        <SectionTitle
          eyebrow="Formacao"
          title={education.title}
          description="Base academica que complementa uma atuacao pragmatica em engenharia de software, produto e resolucao de problemas."
        />
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
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
    </main>
  )
}
