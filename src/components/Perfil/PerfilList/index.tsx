import { Pratos } from '../../../Pages/Home'
import CardPerfil from '../CardPerfil'
import { OpcoesContainer, PerfilList } from './styles'

type Props = {
  pratos: Pratos[]
}

const OpcoesPerfil = ({ pratos }: Props) => {
  return (
    <>
      <OpcoesContainer className="container">
        <PerfilList>
          <li>
            {pratos.map((prato) => (
              <CardPerfil
                key={prato.cardapio.id}
                descricao={prato.cardapio.descricao}
                foto={prato.cardapio.foto}
                nome={prato.cardapio.nome}
                porcao={prato.cardapio.porcao}
                preco={prato.cardapio.preco}
              />
            ))}
          </li>
        </PerfilList>
      </OpcoesContainer>
    </>
  )
}

export default OpcoesPerfil
