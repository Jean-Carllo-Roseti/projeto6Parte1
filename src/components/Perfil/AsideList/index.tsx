import { useState } from 'react'
import FormEntrega from '../FormEntrega'
import FormPagamento from '../FormPagamento'
import { Side } from './styles'
import Carrinho from '../Carrinho'
import Recibo from '../ReciboPedido'

const AsideStates = {
  CARRINHO: 'CARRINHO',
  ENTREGA: 'ENTREGA',
  PAGAMENTO: 'PAGAMENTO',
  RECIBO: 'RECIBO'
}

const Aside = () => {
  const [estadoAtual, setEstadoAtual] = useState(AsideStates.CARRINHO)
  // Funções para mudar o estado

  switch (estadoAtual) {
    case AsideStates.CARRINHO:
      return (
        <Side>
          <Carrinho
            avancaParaEntrega={() => setEstadoAtual(AsideStates.ENTREGA)}
          />
        </Side>
      )
    case AsideStates.ENTREGA:
      return (
        <Side>
          <FormEntrega
            avancaParaPagamento={() => setEstadoAtual(AsideStates.PAGAMENTO)}
            avancaParaCarrinho={() => setEstadoAtual(AsideStates.CARRINHO)}
          />
        </Side>
      )
    case AsideStates.PAGAMENTO:
      return (
        <Side>
          <FormPagamento
            avancaParaRecibo={() => setEstadoAtual(AsideStates.RECIBO)}
            avancaParaEntrega={() => setEstadoAtual(AsideStates.ENTREGA)}
          />
        </Side>
      )
    case AsideStates.RECIBO:
      return (
        <Side>
          <Recibo
            avancaParaPagamento={() => setEstadoAtual(AsideStates.ENTREGA)}
          />
        </Side>
      )

    // Inclua os casos para CONFIRMACAO e FINALIZADO
    default:
      return <Side>Estado não reconhecido.</Side>
  }
}

export default Aside

// export type Props = {
//   // image: string
//   // title: string
//   // description: string
// }
