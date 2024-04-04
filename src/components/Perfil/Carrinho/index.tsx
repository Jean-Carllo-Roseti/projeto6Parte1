import { RootReducer } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { close } from '../../../store/reducer/cart'

import { CartContainer, Overlay, SideBar } from './styles'
import ItensCarrinho from '../ItensCarrinho'
import Formulario from '../Formulario'

const AsideStates = {
  CARRINHO: 'CARRINHO',
  FORMULARIO: 'FORMULARIO'
}

const SideComponent = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const CloseCart = () => {
    dispatch(close())
  }

  const [estadoAtual, setEstadoAtual] = useState(AsideStates.CARRINHO)

  switch (estadoAtual) {
    case AsideStates.CARRINHO:
      return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={CloseCart} />
          <SideBar>
            <ItensCarrinho
              avancaParaEntrega={() => setEstadoAtual(AsideStates.FORMULARIO)}
            />
          </SideBar>
        </CartContainer>
      )
    case AsideStates.FORMULARIO:
      return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={CloseCart} />
          <SideBar>
            <Formulario
              avancaParaCarrinho={() => setEstadoAtual(AsideStates.CARRINHO)}
            />
          </SideBar>
        </CartContainer>
      )

    // Inclua os casos para CONFIRMACAO e FINALIZADO
    default:
      return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={CloseCart} />
          <SideBar>Estado não reconhecido.</SideBar>
        </CartContainer>
      )
  }
}

export default SideComponent
