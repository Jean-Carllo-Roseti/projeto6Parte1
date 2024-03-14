import SideCard from '../AsideCard'
import FormEntrega from '../FormEntrega'
import FormPagamento from '../FormPagamento'
import Recibo from '../ReciboPedido'
import { Side, SideButton, SideList } from './styles'

export type Props = {
  // image: string
  // title: string
  // description: string
}

const Aside = () => (
  <Side>
    <SideCard />
    <SideCard />
    <SideCard />
    <SideList>
      <li>Valor total</li>
      <li>R$ 182,70</li>
    </SideList>
    <SideButton>Continuar com a entrega</SideButton>
    <br />
    <br />
    <Recibo />
  </Side>
)

export default Aside
