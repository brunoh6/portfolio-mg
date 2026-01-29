type Props = {
  children: React.ReactNode
  muted?: boolean
  fullHeight?: boolean
}

export default function Section({ children, muted, fullHeight }: Props) {
  return (
    <section
      className={`${muted ? "bg-neutral-100" : "bg-neutral-50"} ${
        fullHeight ? "min-h-screen flex items-center" : ""
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 py-28 w-full">
        {children}
      </div>
    </section>
  )
}