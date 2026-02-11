import Section from "./Section"
import { insights } from "../data/insights"
import { motion } from "framer-motion"

export default function Insights() {
  const sortedInsights = [...insights].sort((a, b) =>
    b.date.localeCompare(a.date)
  )

  return (
    <Section muted>
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-2xl font-medium">
          Insights
        </h2>

        <div>
          {sortedInsights.map((post, index) => (
            <div key={post.title}>
              
              {/* Línea divisoria (no antes del primero) */}
              {index !== 0 && (
                <hr className="border-t border-neutral-200 my-12" />
              )}

              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="space-y-5 group transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
              >
                {/* Imagen */}
                {post.image && (
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover object-top grayscale transition duration-500 group-hover:grayscale-0"
                    />
                  </div>
                )}

                {/* Fecha */}
                <p className="text-sm text-neutral-500">
                  {post.date}
                </p>

                {/* Título */}
                <h3 className="text-lg font-medium leading-snug transition-colors duration-300 group-hover:text-accent">
                  {post.title}
                </h3>

                {/* Tags */}
                {post.tags && (
                  <div className="flex flex-wrap gap-2">
                    <a>#</a>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 border border-neutral-300 text-neutral-600 transition duration-300 group-hover:border-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Extracto */}
                <p className="text-neutral-700 text-[16px] leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Link externo */}
                {post.type === "linkedin" && post.url && (
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline hover:opacity-70 transition text-sm"
                  >
                    Leer en LinkedIn →
                  </a>
                )}
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}