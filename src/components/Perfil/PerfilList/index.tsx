import CardPerfil from '../CardPerfil'
import { PerfilList } from './styles'

import type Prato from '../../../Models/Pratos'
import { ProductSelecionado } from '../../../Pages/Perfil'

export type Opcoes = Pick<Prato, 'image' | 'title' | 'id' | 'description'>[]

const OpcoesPerfil = ({ pratos }: { pratos: Opcoes }) => (
  <div className="container">
    <PerfilList>
      {pratos.map(({ id, description, title, image }) => (
        <CardPerfil
          key={''}
          description={''}
          title={''}
          image={''}
          pratosPerfil={[{ id, description, title, image }]}
        />
      ))}
    </PerfilList>
  </div>
)

export default OpcoesPerfil
