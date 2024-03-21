import { Pratos } from '../../../Pages/Home'
import Cardapio from '../Cardapio'
import { List, SectionList } from './styles'

type Props = {
  pratos: Pratos[]
}

const CardapioList = ({ pratos }: Props) => (
  <SectionList>
    <List>
      {pratos.map((prato) => (
        <Cardapio
          key={prato.id}
          descricao={prato.descricao}
          tipo={prato.tipo}
          titulo={prato.titulo}
          avaliacao={prato.avaliacao}
          capa={prato.capa}
          cardapio={{ id: prato.cardapio ? prato.cardapio.id : 0 }} //duvida sobre esta linha
        />
      ))}
    </List>
  </SectionList>
)

export default CardapioList
