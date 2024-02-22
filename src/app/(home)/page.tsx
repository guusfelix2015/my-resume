import { StacksOverlay } from '@/components/StacksOverlay'
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="mb-20 mt-32 flex min-h-screen w-full flex-col items-center  justify-start gap-4">
      <div className="flex w-full items-center justify-between gap-6">
        <div className="flex w-full items-center justify-start gap-6">
          <Image
            src="https://avatars.githubusercontent.com/u/54154635?v=4"
            alt=""
            width={400}
            height={400}
            className="h-24 w-24 rounded-lg object-contain"
          />
          <div className="flex flex-col gap-1">
            <h1 className=" text-3xl font-bold text-zinc-200">Gustavo Felix</h1>
            <p className="group rounded-md text-base font-normal text-zinc-400 transition-all duration-200 ease-out">
              I&apos;m a{' '}
              <span className="mr-1 text-zinc-400 duration-150 ease-out group-hover:text-emerald-400">
                Software Developer.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-start  gap-6 rounded-lg">
        <div className=" flex gap-3">
          <a
            href="https://www.linkedin.com/in/gustavofelixsilva/"
            draggable={false}
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-md bg-zinc-950 px-4 py-2 text-zinc-300 duration-200 ease-out hover:scale-105 hover:bg-zinc-900 hover:text-emerald-400 active:scale-95"
            rel="noreferrer"
          >
            <LinkedInLogoIcon width={20} height={20} />
            Linkedin
          </a>
          <a
            href="https://github.com/guusfelix2015"
            draggable={false}
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-md bg-zinc-950 px-4 py-2 text-zinc-300 duration-200 ease-out hover:scale-105 hover:bg-zinc-900 hover:text-emerald-400 active:scale-95"
            rel="noreferrer"
          >
            <GitHubLogoIcon width={20} height={20} />
            Github
          </a>
          <a
            href="mailto:engcfelix@gmail.com"
            draggable={false}
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-md bg-zinc-950 px-4 py-2 text-zinc-300 duration-200 ease-out hover:scale-105 hover:bg-zinc-900 hover:text-emerald-400 active:scale-95 max-sm:hidden"
            rel="noreferrer"
          >
            <EnvelopeClosedIcon width={20} height={20} />
            Email
          </a>
        </div>
      </div>
      <div className="mt-12 flex w-full flex-col items-start justify-start gap-2 rounded-lg border border-zinc-800 px-8 py-6">
        <h2 className="text-xl font-bold text-emerald-500">Sobre mim</h2>
        <p
          title="Meu nome é Gustavo Felix e sou um desenvolvedor fullstack especializado em tecnologias JavaScript. Minha jornada no mundo da programação
          me levou a explorar uma ampla gama de tecnologias, incluindo React, Next.js, JavaScript, TypeScript, Styled Components, Tailwind, MUI
          Material Design, Chakra, NestJs, Angular, Prisma e PostgreSQL."
          className="line-clamp-4 leading-relaxed text-zinc-300"
        >
          Meu nome é Gustavo Felix e sou um desenvolvedor fullstack
          especializado em tecnologias JavaScript. Minha jornada no mundo da
          programação me levou a explorar uma ampla gama de tecnologias,
          incluindo React, Next.js, JavaScript, TypeScript, Styled Components,
          Tailwind, MUI Material Design, Chakra, NestJs, Angular, Prisma e
          PostgreSQL.
        </p>
      </div>
      <div className="mt-12 flex w-full items-center justify-between gap-6 max-md:flex-col">
        {/*         <div className="flex w-full flex-col items-start justify-start gap-4">
          <div className="flex w-full items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-emerald-500">
              ⭐ Meus projetos favoritos
            </h2>
            <Link
              className="w-max rounded-md px-4 py-2 text-sm font-medium duration-150 ease-out hover:bg-zinc-900 hover:text-emerald-400"
              href="/projects"
            >
              Ver mais
            </Link>
          </div>
          <div className="relative flex h-max w-full max-w-xl  flex-col gap-4 overflow-hidden rounded-lg ">
            <CardContainer
              title="Translify GO"
              description="Have you ever thought about practicing your English through natural conversation and being corrected every time you make a mistake? That was my project idea to improve my skills and seek opportunities in the market as a Developer."
              link="https://github.com/revogabe/translify-go"
              variant="minimal"
            />
            <CardContainer
              title="JobsDev GO"
              description="This project is an API in Golang and Frontend in Next.js with the intention of studying more about Go and also helping the community with the job search in the market."
              link="https://github.com/revogabe/go-jobsdev"
              variant="minimal"
            />
            <CardContainer
              title="feat: add default value prop"
              description="In this PR, I added the optional prop of default value, which, when passing the item's value to the default value, makes this item active. Otherwise, the function of activating the first item on the list continues."
              link="https://github.com/pacocoursey/cmdk/pull/123"
              variant="minimal"
            />
            <CardContainer
              title="LoopyGo"
              description="Loopy is a completely Open Source Duolingo-style programming learning platform."
              link="https://github.com/LoopyGO/loopy-web"
              variant="minimal"
            />
            <CardContainer
              title="Br Devstreamers V2"
              description="redesign of the project conceived by falivjmendes which consists of bringing together the lives of br developers"
              link="https://github.com/revogabe/br-devstreamers-v2"
              variant="minimal"
            />
          </div>
        </div> */}
        <StacksOverlay />
      </div>
    </main>
  )
}
