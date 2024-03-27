import { RootReducer } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'

import {
  Cards,
  CartContainer,
  ImgFechar,
  ImgPrato,
  Overlay,
  SideBar,
  Valor
} from './styles'

import Lixeira from '../../../assets/images/Lixeira.png'

import { ButtonPerfil } from '../ButtonPerfil/styled'
import { close } from '../../../store/reducer/cart'

const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const CloseCart = () => {
    dispatch(close())
  }

  const ValorTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    })
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={CloseCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <Cards key={item.id}>
              <ImgPrato src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{item.preco}</span>
                <ImgFechar
                  src={Lixeira}
                  alt="imagem de um X para fechar a aba"
                />
              </div>
            </Cards>
          ))}
        </ul>
        <Valor>
          <li>valor total</li>
          <li>R$ {(182, 70)}</li>
        </Valor>
        <ButtonPerfil>Continuar a entrega</ButtonPerfil>
      </SideBar>
    </CartContainer>
  )
}

export default Carrinho
