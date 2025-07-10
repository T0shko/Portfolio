  import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  const { ready } = useTranslation()

  if (!ready) return <div>Loading...</div>

  return (
    <div className="main-bg min-h-screen">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

  export default App 