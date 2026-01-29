import Section from "./Section"
import { Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <Section muted>
      <div
        id="contacto"
        className="flex flex-col items-center text-center space-y-6"
      >
        <h2 className="text-2xl font-medium">
          Hablemos si tu operación necesita resultados reales
        </h2>

        <p className="text-neutral-700 text-[17px] leading-relaxed max-w-xl">
          Analizo, priorizo y ejecuto donde tiene sentido. Sin paquetes genéricos.
        </p>

        <p className="text-neutral-600 text-sm flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
          <span>Quito, Ecuador</span>
          <span>|</span>
          <span>Español · Inglés · Ruso · Polaco</span>
          <span>|</span>

          <a
            href="mailto:mateoricardog@gmail.com"
            className="underline hover:opacity-70 transition"
          >
            mateoricardog@gmail.com
          </a>

          <span>|</span>

          <a
            href="https://ec.linkedin.com/in/mrganan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:opacity-70 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </p>
      </div>
    </Section>
  )
}