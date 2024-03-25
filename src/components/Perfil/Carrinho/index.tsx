import {
  Cards,
  CartContainer,
  ImgFechar,
  ImgPrato,
  Overlay,
  SideBar,
  Valor
} from './styles'
import Pizza from '../../../assets/images/pizzaPerfil.png'
import Lixeira from '../../../assets/images/Lixeira.png'
import { ButtonPerfil } from '../ButtonPerfil/styled'

const Carrinho = () => (
  <CartContainer>
    <Overlay />
    <SideBar>
      <ul>
        <Cards>
          <ImgPrato src={Pizza} alt="imagem da pizza " />
          <div>
            <h3>titulo</h3>
            <span>R$ 60,90</span>
            <ImgFechar src={Lixeira} alt="imagem de um X para fechar a aba" />
          </div>
        </Cards>
        <Cards>
          <ImgPrato src={Pizza} alt="imagem da pizza " />
          <div>
            <h3>titulo</h3>
            <span>R$ 60,90</span>
            <ImgFechar src={Lixeira} alt="imagem de um X para fechar a aba" />
          </div>
        </Cards>
      </ul>
      <Valor>
        <li>valor total</li>
        <li>R$ 182,70</li>
      </Valor>
      <ButtonPerfil>Continuar a entrega</ButtonPerfil>
    </SideBar>
  </CartContainer>
)

export default Carrinho
