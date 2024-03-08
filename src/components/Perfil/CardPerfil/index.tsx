import { CardContainer, DescriptionPerfil } from './styles'

import Botao from '../ButtonPerfil'

export type Props = {
  description: string
  title: string
  image: string
  children?: React.ReactNode
}

const CardPerfil = ({ children, description, image, title }: Props) => (
  <CardContainer>
    <div>
      <img src={image} alt="imagem dos pratos" />
    </div>
    {children}
    <DescriptionPerfil>
      <h3>{title}</h3>
      <p>{description}</p>
    </DescriptionPerfil>
    <div>
      <Botao>Adicionar ao carrinho</Botao>
    </div>
  </CardContainer>
)

export default CardPerfil
