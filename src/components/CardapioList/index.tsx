import Cardapio from '../Cardapio'
import { List, SectionList } from './styles'

const CardapioList = () => (
  <SectionList>
    <List>
      <li>
        <Cardapio child={['japones', 'destaque']} />
      </li>
      <li>
        <Cardapio child={['japones']} />
      </li>
      <li>
        <Cardapio child={['japones']} />
      </li>
      <li>
        <Cardapio child={['japones']} />
      </li>
      <li>
        <Cardapio child={['japones']} />
      </li>
      <li>
        <Cardapio child={['japones']} />
      </li>
    </List>
  </SectionList>
)

export default CardapioList
