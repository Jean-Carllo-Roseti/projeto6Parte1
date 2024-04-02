import { Banner, Paragrafo } from './styles'

import { Restaurante } from '../../../Pages/Home'

export type BannerProps = Pick<Restaurante, 'capa' | 'tipo' | 'titulo'>

const BannerPerfil = ({ capa, titulo, tipo }: BannerProps) => (
  <Banner style={{ backgroundImage: `url(${capa})` }}>
    <div>
      <div className="container">
        <p>{tipo}</p>
        <Paragrafo>{titulo}</Paragrafo>
      </div>
    </div>
  </Banner>
)

export default BannerPerfil
