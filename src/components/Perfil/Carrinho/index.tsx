import { RootReducer } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { close } from '../../../store/reducer/cart'

import FormEntrega from '../FormEntrega'
import FormPagamento from '../FormPagamento'
import Recibo from '../Recibo'

import { CartContainer, Overlay, SideBar } from './styles'
import ItensCarrinho from '../ItensCarrinho'

const AsideStates = {
  CARRINHO: 'CARRINHO',
  ENTREGA: 'ENTREGA',
  PAGAMENTO: 'PAGAMENTO',
  RECIBO: 'RECIBO'
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
              avancaParaEntrega={() => setEstadoAtual(AsideStates.ENTREGA)}
            />
          </SideBar>
        </CartContainer>
      )
    case AsideStates.ENTREGA:
      return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={CloseCart} />
          <SideBar>
            <FormEntrega
              avancaParaPagamento={() => setEstadoAtual(AsideStates.PAGAMENTO)}
              avancaParaCarrinho={() => setEstadoAtual(AsideStates.CARRINHO)}
            />
          </SideBar>
        </CartContainer>
      )
    case AsideStates.PAGAMENTO:
      return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={CloseCart} />
          <SideBar>
            <FormPagamento
              avancaParaRecibo={() => setEstadoAtual(AsideStates.RECIBO)}
              avancaParaEntrega={() => setEstadoAtual(AsideStates.ENTREGA)}
            />
          </SideBar>
        </CartContainer>
      )
    case AsideStates.RECIBO:
      return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={CloseCart} />
          <SideBar>
            <Recibo
              avancaParaPagamento={() => setEstadoAtual(AsideStates.ENTREGA)}
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

// return (
//   <CartContainer className={isOpen ? 'is-open' : ''}>
//     <Overlay onClick={CloseCart} />
//     <SideBar>
//       <Carrinho
//         avancaParaEntrega={() => setEstadoAtual(AsideStates.ENTREGA)}
//       />
//     </SideBar>
//   </CartContainer>
// )
