import SideCard from '../AsideCard'
import { Side, SideList } from './styles'

// export type Props = {
//   image: string
//   title: string
//   description: string
// }

const Aside = () => (
  <Side>
    <SideCard />
    <SideCard />
    <SideCard />
    <SideList>
      <li>Valor total</li>
      <li>R$ 182,70</li>
    </SideList>
    <button>Continuar com a entrega</button>
  </Side>
)

export default Aside
