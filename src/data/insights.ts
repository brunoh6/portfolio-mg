import post from "../assets/post.jpeg"
import post1 from "../assets/post1.jpg"

export type Insight = {
  title: string
  date: string
  excerpt: string
  type: "linkedin" | "internal"
  url?: string
  image?: string
  tags?: string[]
}

export const insights: Insight[] = [
  {
    title: "Cuando los KPIs se cumplen, pero el negocio se deteriora",
    date: "2026-02-09",
    excerpt:
      "Es común ver dashboards con tasas de contacto altas y promesas de pago en aumento, mientras la caja no refleja esa mejora. El problema suele estar en la calidad del recovery, la priorización del portafolio y la estructura de seguimiento...",
    type: "linkedin",
    url: "https://www.linkedin.com/posts/mrganan_cuando-los-indicadores-se-ven-bien-pero-activity-7426803412647903233-Tm85?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBmj9gBPaZKUBLlRZDgyp-fwNCtkK79054",
    image: post,
    tags: [
      "Cashflow",
      "Recovery Strategy",
      "Operaciones",
      "KPIs",
      "Overdue Portfolio"
    ]
  },
  {
    title: "Medir mal el SLA puede destruir el cashflow sin que nadie lo note",
    date: "2026-02-10",
    excerpt:
        "En muchas operaciones el foco está en cumplir tiempos promedio de respuesta. El problema es que un SLA mal definido empuja a priorizar velocidad sobre impacto. Cuando todos los casos se tratan igual...",
    type: "linkedin",
    url: "https://www.linkedin.com/posts/mrganan_medir-mal-el-sla-puede-destruir-el-cashflow-activity-7427018579684007936-PaCS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBmj9gBPaZKUBLlRZDgyp-fwNCtkK79054",
    image: post1,
    tags: [
        "SLA",
        "Cashflow",
        "Prioritization",
        "Operations",
        "Risk Control"
    ]
    }
]