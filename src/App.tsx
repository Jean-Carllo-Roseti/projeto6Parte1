import { GlobalCss } from './styles'

import Hero from './components/Hero'
import CardapioList from './components/CardapioList'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalCss />
      <Hero />
      <CardapioList />
      <Footer />
    </>
  )
}

export default App
