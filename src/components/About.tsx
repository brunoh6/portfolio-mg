import Section from "./Section"
import { Check } from "lucide-react"

export default function About() {
  return (
    <Section muted>
      <div className="grid md:grid-cols-12 gap-12">
        {/* Texto */}
        <div className="md:col-span-7 space-y-8 text-[17px] leading-relaxed">
          <p>
            Soy consultor senior en cobranzas y operaciones, con experiencia
            internacional trabajando con empresas de servicios y financieras.
          </p>

          <p className="text-neutral-700">
            He liderado y optimizado operaciones end-to-end, desde el diagnóstico
            de portafolios overdue y charged-off hasta la ejecución operativa,
            cumplimiento regulatorio y gestión de equipos.
          </p>

          <p className="text-neutral-700">
            Trabajo con empresas que necesitan orden, foco y resultados medibles,
            no promesas ni fórmulas genéricas.
          </p>
        </div>

        {/* Resultados clave */}
        <div className="md:col-span-5">
          <ul className="space-y-5 text-[15px] text-neutral-700">
            {[
              "Recuperaciones promedio de USD 250,000 mensuales",
              "Mejora sostenida de tasas de recuperación",
              "Mayor control operativo y performance en call centers",
              "Procesos más claros, medibles y escalables",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-accent mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}