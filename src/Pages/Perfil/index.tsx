import { useParams } from 'react-router-dom'
import Footer from '../../components/Home/Footer'
import HeaderPerfil from '../../components/Perfil/HeaderPerfil'
import OpcoesPerfil from '../../components/Perfil/PerfilList'
import { useEffect, useState } from 'react'
import Carrinho from '../../components/Perfil/Carrinho'

const Perfil = () => {
  const { id } = useParams() // Obtendo o id do URL
  const [pratos, setPratos] = useState([]) // Estado para armazenar os dados do restaurante

  useEffect(() => {
    // Busca os dados do restaurante com o id especificado
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Supondo que a API retorna um objeto do restaurante e `cardapio` é um array de pratos
        setPratos(data.cardapio || []) // Atualiza o estado com os pratos do restaurante
      })
  }, [id]) // Dependência para o useEffect

  return (
    <>
      <HeaderPerfil />
      <OpcoesPerfil pratos={pratos} />
      <Carrinho />
      <Footer />
    </>
  )
}
export default Perfil
