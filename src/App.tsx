import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"

function App() {
  return (
    <main className="font-sans bg-neutral-50 text-neutral-900 antialiased">
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  )
}

export default App