import CardapioList from '../../components/Home/CardapioList'
import Footer from '../../components/Home/Footer'
import Hero from '../../components/Home/Hero'

// export type Pratos = {
//   id: number
//   titulo: string
//   destacado: boolean
//   tipo: string
//   avaliacao: number
//   descricao: string
//   capa: string
//   cardapio: [
//     foto: string,
//     preco: string,
//     id: number,
//     nome: string,
//     descricao: string,
//     porcao: string
//   ]
// }

export type Prato = {
  foto: string
  preco: string
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

import { useGetFeatureRestaurantesQuery } from '../../services/api'

const Home = () => {
  // const [opcoesGeral, setOpecoesGeral] = useState<Restaurante[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
  //     .then((res) => res.json())
  //     .then((res) => setOpecoesGeral(res))
  // }, [])

  const { data: home } = useGetFeatureRestaurantesQuery()

  if (home) {
    return (
      <>
        <Hero />
        <CardapioList restaurante={home} />
        <Footer />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Home
