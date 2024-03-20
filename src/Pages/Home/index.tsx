import CardapioList from '../../components/Home/CardapioList'
import Footer from '../../components/Home/Footer'
import Hero from '../../components/Home/Hero'

import Sushi from '../../assets/images/sushi.png'

export type Pratos = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string[]
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => (
  <>
    <Hero />
    <CardapioList pratos={paginaHome} />
    <Footer />
  </>
)

export default Home
