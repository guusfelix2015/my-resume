type SectionTitleProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="flex max-w-3xl flex-col gap-3">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400/90">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-7 text-zinc-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
