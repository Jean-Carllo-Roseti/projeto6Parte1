import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/logo.png'
import {
  HeaderContainer,
  PerfilList,
  ContainerPerfil,
  BannerPerfil,
  ImaLogo,
  Paragrafo
} from './styles'

const HeaderPerfil = () => (
  <HeaderContainer>
    <ContainerPerfil>
      <PerfilList>
        <li>Restaurante</li>
        <li>
          <Link to="/">
            <ImaLogo src={Logo} alt="" />
          </Link>
        </li>
        <li>0 produto(s) no carrinho</li>
      </PerfilList>
    </ContainerPerfil>
    <BannerPerfil>
      <div>
        <div className="container">
          <p>italiana</p>
          <Paragrafo>La Doce Vita Trattoia</Paragrafo>
        </div>
      </div>
    </BannerPerfil>
  </HeaderContainer>
)

export default HeaderPerfil
