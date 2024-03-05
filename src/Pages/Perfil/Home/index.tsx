import Prato from '../../../Models/Pratos'
import CardapioList from '../../../components/CardapioList'
import Footer from '../../../components/Footer'
import Hero from '../../../components/Hero'

import Sushi from '../../../assets/images/sushi.png'

const paginaHome: Prato[] = [
  {
    id: 1,
    category: ['japones', 'destaque'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    nota: '4.6',
    image: Sushi
  },
  {
    id: 2,
    category: ['japones'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    nota: '4.6',
    image: Sushi
  },
  {
    id: 3,
    category: ['japones'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    nota: '4.6',
    image: Sushi
  },
  {
    id: 4,
    category: ['japones'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    nota: '4.6',
    image: Sushi
  },
  {
    id: 5,
    category: ['japones'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    nota: '4.6',
    image: Sushi
  },
  {
    id: 6,
    category: ['japones'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    nota: '4.6',
    image: Sushi
  }
]

const Home = () => (
  <>
    <Hero />
    <CardapioList pratos={paginaHome} />
    <Footer />
  </>
)

export default Home
