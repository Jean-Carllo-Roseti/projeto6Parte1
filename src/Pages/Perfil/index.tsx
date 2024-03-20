import Footer from '../../components/Home/Footer'
import HeaderPerfil from '../../components/Perfil/HeaderPerfil'
import OpcoesPerfil from '../../components/Perfil/PerfilList'

const Perfil = () => {
  return (
    <>
      <HeaderPerfil />
      <OpcoesPerfil pratos={[]} />
      <Footer />
    </>
  )
}
export default Perfil
