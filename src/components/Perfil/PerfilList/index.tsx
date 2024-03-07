import CardPerfil from '../CardPerfil'
import { PerfilList } from './styles'

import type Prato from '../../../Models/Pratos'

export type Opcoes = Pick<Prato, 'image' | 'title' | 'id' | 'description'>[]

const OpcoesPerfil = ({ pratos }: { pratos: Opcoes }) => (
  <div className="container">
    <PerfilList>
      {pratos.map((opcao) => (
        <CardPerfil
          key={opcao.id}
          description={opcao.description}
          title={opcao.title}
          image={opcao.image}
        />
      ))}
    </PerfilList>
  </div>
)

export default OpcoesPerfil
