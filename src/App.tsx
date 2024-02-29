import { GlobalCss } from './styles'

import Hero from './components/Hero'
import CardapioList from './components/CardapioList'
import Cardapio from './components/Cardapio'

function App() {
  return (
    <>
      <GlobalCss />
      <Hero />
      <Cardapio />
    </>
  )
}

export default App
