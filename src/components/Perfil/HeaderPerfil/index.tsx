import Logo from '../../../assets/images/logo.png'
import {
  HeaderContainer,
  PerfilList,
  ContainerPerfil,
  BannerPerfil,
  ImaLogo,
  SubTitulo
} from './styles'

const HeaderPerfil = () => (
  <HeaderContainer>
    <ContainerPerfil>
      <PerfilList>
        <li>Restaurante</li>
        <li>
          <ImaLogo src={Logo} alt="" />
        </li>
        <li>0 produto(s) no carrinho</li>
      </PerfilList>
    </ContainerPerfil>
    <BannerPerfil>
      <div className="container">
        <p>italiana</p>
        <SubTitulo>La Doce Vita Trattoia</SubTitulo>
      </div>
    </BannerPerfil>
  </HeaderContainer>
)

export default HeaderPerfil
