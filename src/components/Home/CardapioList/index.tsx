import { Pratos } from '../../../Pages/Home'
import Cardapio from '../Cardapio'
import { List, SectionList } from './styles'

type Props = {
  pratos: Pratos[]
}

const CardapioList = ({ pratos }: Props) => (
  <SectionList>
    <List>
      {pratos.map((pratos) => (
        <Cardapio
          key={pratos.id}
          descricao={pratos.descricao}
          tipo={pratos.tipo}
          titulo={pratos.titulo}
          avaliacao={pratos.avaliacao}
          capa={pratos.capa}
        />
      ))}
    </List>
  </SectionList>
)

export default CardapioList
