import { LinkSide } from './LinkSide'

export function Sidebar() {
  return (
    <div className="fixed flex w-full max-w-[240px] flex-col gap-6">
      <li className="flex flex-col items-start justify-start gap-2">
        <LinkSide href="#about">Sobre mim</LinkSide>
        <LinkSide href="#journey">Jornada</LinkSide>
        <LinkSide href="#experience">Experiência</LinkSide>
      </li>
    </div>
  )
}
