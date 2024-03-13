import { useState } from 'react'
import ProductPerfil from '../ProductPerfil'
import { ButtonCard, CardContainer, DescriptionPerfil } from './styles'

export type Props = {
  description: string
  title: string
  image: string
  children?: React.ReactNode
}

const CardPerfil = ({ children, description, image, title }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)

  const fecharModal = () => setModalAberto(false)

  return (
    <>
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
          <ButtonCard onClick={() => setModalAberto(true)}>
            Adicionar ao carrinho
          </ButtonCard>
        </div>
      </CardContainer>
      {modalAberto && <ProductPerfil onFechar={fecharModal} />}
    </>
  )
}

export default CardPerfil
