import CardPerfil from '../CardPerfil'
import { OpcoesContainer, PerfilList } from './styles'

const OpcoesPerfil = () => {
  return (
    <>
      <OpcoesContainer className="container">
        <PerfilList>
          <li>
            <CardPerfil />
          </li>
          <li>
            <CardPerfil />
          </li>
          <li>
            <CardPerfil />
          </li>
          <li>
            <CardPerfil />
          </li>
          <li>
            <CardPerfil />
          </li>
          <li>
            <CardPerfil />
          </li>
        </PerfilList>
      </OpcoesContainer>
    </>
  )
}

export default OpcoesPerfil
