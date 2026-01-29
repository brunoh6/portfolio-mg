import { useState } from "react"
import Section from "./Section"
import {
  TrendingUp,
  Wallet,
  Headphones,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const services = [
  {
    title: "Optimización de Cobranzas Overdue & Charged-Off",
    text:
      "Intervención directa sobre carteras vencidas para mejorar tasas de recuperación, priorización y control operativo.",
    icon: TrendingUp,
  },
  {
    title: "Optimización de Cashflow y Operaciones",
    text:
      "Identificación y corrección de cuellos de botella que afectan ingresos, liquidez y control operativo.",
    icon: Wallet,
  },
  {
    title: "Estructuración y Escalamiento de Call Centers",
    text:
      "Diseño y optimización de operaciones de call center orientadas a resultados, eficiencia y cumplimiento.",
    icon: Headphones,
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const service = services[active]

  const prev = () =>
    setActive((active - 1 + services.length) % services.length)

  const next = () =>
    setActive((active + 1) % services.length)

  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center space-y-10">
        {/* Servicio */}
        <div className="space-y-6">
          <service.icon className="w-6 h-6 text-accent/70 mx-auto" />

          <h3 className="text-xl font-medium leading-snug">
            {service.title}
          </h3>

          <p className="text-neutral-700 text-[17px] leading-relaxed">
            {service.text}
          </p>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-6 text-neutral-500">
          <button
            onClick={prev}
            aria-label="Servicio anterior"
            className="hover:text-accent transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-sm tracking-wide">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(services.length).padStart(2, "0")}
          </span>

          <button
            onClick={next}
            aria-label="Siguiente servicio"
            className="hover:text-accent transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  )
}