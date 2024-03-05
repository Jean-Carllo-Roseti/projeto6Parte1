import Pratos from '../../Models/Pratos'
import Cardapio from '../Cardapio'
import { List, SectionList } from './styles'

export type Props = {
  pratos: Pratos[]
}

const CardapioList = ({ pratos }: Props) => (
  <SectionList>
    <List>
      <li>
        {pratos.map((pratos) => (
          <Cardapio
            key={pratos.id}
            category={pratos.category}
            description={pratos.description}
            title={pratos.title}
            nota={pratos.nota}
            image={pratos.image}
          />
        ))}
      </li>
    </List>
  </SectionList>
)

export default CardapioList
