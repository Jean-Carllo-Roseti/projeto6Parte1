import SideCard from '../AsideCard'
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
  </Side>
)

export default Aside
{
  /*de ser um aarray */
}
