import Logo from '../../assets/images/logo.png'
import {
  HeaderContainer,
  PerfilList,
  ContainerPerfil,
  BannerPerfil,
  ImaLogo
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
      <p>italiana</p>
      <p>La Doce Vita Trattoia</p>
    </BannerPerfil>
  </HeaderContainer>
)

export default HeaderPerfil
