import Section from "./Section"
import profile from "../assets/profile.jpg"

export default function Hero() {
  return (
    <Section>
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-7">
          {/* Eyebrow */}
          <p className="text-sm uppercase tracking-wide text-accent">
            Consultoría en cobranzas y operaciones
          </p>

          {/* Headline */}
          <h1 className="mt-4 text-4xl md:text-5xl font-medium leading-[1.15] tracking-tight">
            <b>Mateo Ganan</b> <br />
            Consultor en Cobranzas, Cashflow y Operaciones
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-lg leading-relaxed text-neutral-700">
            Optimizo carteras vencidas y operaciones de cobranza para recuperar
            liquidez real y sostenible en empresas de servicios y financieras.
          </p>

          {/* CTA */}
          <a
            href="#contacto"
            className="inline-block mt-12 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-gray transition"
          >
            Agenda una llamada estratégica
          </a>
        </div>
        {/* Foto */}
        <div className="md:col-span-4 hidden md:flex justify-end">
          <div className="w-48 lg:w-48">
            <img
            src={profile}
            alt="Foto profesional"
            className="w-full grayscale rounded-sm"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}