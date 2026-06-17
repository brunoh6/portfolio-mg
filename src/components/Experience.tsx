import Section from "./Section"
import { BarChart3, Network, Gauge, Workflow } from "lucide-react"

const impactAreas = [
  {
    label: "Process Audit",
    icon: Workflow,
  },
  {
    label: "KPI Design",
    icon: Gauge,
  },
  {
    label: "Performance Dashboards",
    icon: BarChart3,
  },
  {
    label: "Institutional Alignment",
    icon: Network,
  },
]

export default function Experience() {
  return (
    <Section>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Header */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-[0.22em] text-accent/80">
              Experiencia reciente
            </span>

            <h2 className="text-2xl md:text-3xl font-medium leading-tight">
              Eficiencia operativa en entornos institucionales complejos
            </h2>

            <p className="text-neutral-600 text-[15px] leading-relaxed">
              Proyectos de planificación, mejora continua y control de gestión
              aplicados a operaciones de alta exigencia.
            </p>
          </div>

          {/* Card */}
          <article className="md:col-span-8 border border-neutral-200 bg-white rounded-2xl p-8 md:p-10 shadow-sm">
            <div className="space-y-2 mb-8">
              <h3 className="text-xl font-medium">
                Presidency of the Republic of Ecuador
              </h3>

              <p className="text-neutral-700">
                Strategic Planning & Efficiency Project Lead
              </p>

              <p className="text-sm text-neutral-500">
                Quito, Ecuador · Apr 2026 – Jun 2026
              </p>
            </div>

            <div className="space-y-5 text-[16px] leading-relaxed text-neutral-700">
              <p>
                Lidera proyectos de planificación estratégica y eficiencia
                operativa orientados a mejorar flujos de información, reducir
                cuellos de botella en reportes y fortalecer la evaluación de
                políticas públicas.
              </p>

              <p>
                Su trabajo integra auditoría de procesos, diseño de KPIs,
                alineamiento institucional entre ministerios y desarrollo de
                dashboards de performance para apoyar iniciativas de
                modernización y transformación digital.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {impactAreas.map((area) => (
                <div
                  key={area.label}
                  className="flex items-center gap-3 text-sm text-neutral-700"
                >
                  <area.icon className="w-4 h-4 text-accent/70" />
                  <span>{area.label}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </Section>
  )
}