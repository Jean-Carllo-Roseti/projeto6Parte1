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
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../../store/reducer/cart'
import { RootReducer } from '../../../store'

// import { Restaurante } from '../../../Pages/Home'

// export type Props = Pick<Restaurante, 'tipo' | 'titulo'> // quando eu substituo o hardcode acontece um efeito cascata indesejado.

const HeaderPerfil = () => {
  const dispatch = useDispatch()

  const OpenCart = () => {
    dispatch(open())
  }

  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <HeaderContainer>
      <ContainerPerfil>
        <PerfilList>
          <li>Restaurante</li>
          <li>
            <Link to="/">
              <ImaLogo src={Logo} alt="" />
            </Link>
          </li>
          <li onClick={OpenCart}>{items.length} produto(s) no carrinho</li>
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
}
export default HeaderPerfil
