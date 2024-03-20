import CardapioList from '../../components/Home/CardapioList'
import Footer from '../../components/Home/Footer'
import Hero from '../../components/Home/Hero'

import { useEffect, useState } from 'react'

export type Pratos = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: string
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [opcoesGeral, setOpecoesGeral] = useState<Pratos[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setOpecoesGeral(res))
  }, [])

  return (
    <>
      <Hero />
      <CardapioList pratos={opcoesGeral} />
      <Footer />
    </>
  )
}

export default Home
