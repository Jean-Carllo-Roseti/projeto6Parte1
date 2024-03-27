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
import { close, remove } from '../../../store/reducer/cart'

const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const CloseCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const valorTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      const precoNumerico = parseFloat(valorAtual.preco)
      return acumulador + precoNumerico
    }, 0)
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
                <span>
                  {parseFloat(item.preco).toFixed(2).replace('.', ',')}
                </span>
                <ImgFechar
                  onClick={() => removeItem(item.id)}
                  src={Lixeira}
                  alt="imagem de um X para fechar a aba"
                />
              </div>
            </Cards>
          ))}
        </ul>
        <Valor>
          <li>Valor total</li>
          <li>R$ {valorTotal().toFixed(2).replace('.', ',')}</li>
        </Valor>
        <ButtonPerfil>Continuar a entrega</ButtonPerfil>
      </SideBar>
    </CartContainer>
  )
}

export default Carrinho
