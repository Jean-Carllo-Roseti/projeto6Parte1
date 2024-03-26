import { useParams } from 'react-router'
import Footer from '../../components/Home/Footer'
import HeaderPerfil from '../../components/Perfil/HeaderPerfil'
import OpcoesPerfil from '../../components/Perfil/PerfilList'
import { useGetFeaturePratosQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetFeaturePratosQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <HeaderPerfil />
      <OpcoesPerfil pratos={restaurante.cardapio} />
      <Footer />
    </>
  )
}

export default Perfil
