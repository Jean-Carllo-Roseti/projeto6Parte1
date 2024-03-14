import { useState } from 'react'
import ProductPerfil from '../ProductPerfil'
import { ButtonCard, CardContainer, DescriptionPerfil } from './styles'
import type Prato from '../../../Models/Pratos'

type PerfilOpcoes = Omit<Prato, 'nota' | 'category'> //esse aqui

export type Props = {
  description: string
  title: string
  image: string
  children?: React.ReactNode
  pratosPerfil?: PerfilOpcoes[]
}

const CardPerfil = ({ children, pratosPerfil }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState<PerfilOpcoes | null>( //atenção neste useState
    null
  )

  const abrirModal = (prato: PerfilOpcoes) => {
    setPratoSelecionado(prato)
    setModalAberto(true)
  }

  const fecharModal = () => {
    setModalAberto(false)
    setPratoSelecionado(null) // Limpa o prato selecionado ao fechar o modal
  }

  return (
    <>
      {pratosPerfil?.map((prato) => (
        <CardContainer key={prato.id}>
          <div>
            <img src={prato.image} alt="imagem dos pratos" />
          </div>
          {children}
          <DescriptionPerfil>
            <h3>{prato.title}</h3>
            <p>{prato.description}</p>
          </DescriptionPerfil>
          <div>
            <ButtonCard onClick={() => abrirModal(prato)}>
              Adicionar ao carrinho
            </ButtonCard>
          </div>
        </CardContainer>
      ))}
      {modalAberto && pratoSelecionado && (
        <ProductPerfil
          key={pratoSelecionado.id} //dificuldade para realizar este map
          image={pratoSelecionado.image}
          title={pratoSelecionado.title}
          description={pratoSelecionado.description}
          onFechar={fecharModal}
        />
      )}
    </>
  )
}

export default CardPerfil
