import { RootReducer } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'

import { CartContainer, Overlay, SideBar } from './styles'

import { close } from '../../../store/reducer/cart'
import FormEntrega from '../FormEntrega'

const Carrinho = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const CloseCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={CloseCart} />
      <SideBar>
        <FormEntrega />
      </SideBar>
    </CartContainer>
  )
}

export default Carrinho
