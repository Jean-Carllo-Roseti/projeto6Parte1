import { CardContainer, DescriptionPerfil } from './styles'

import pizza from '../../../assets/images/pizzaPerfil.png'
import Botao from '../ButtonPerfil'
import PerfilModa from '../PerfilModal'
import { useState } from 'react'

const CardPerfil = () => {
  // const [modalAberto, setModalAberto] = useState(false)

  // const onClose = setModalAberto(false)

  return (
    <>
      <CardContainer>
        <div>
          <img src={pizza} alt="" />
        </div>
        <DescriptionPerfil>
          <h3>Pizza Marguerita</h3>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
        </DescriptionPerfil>
        <div>
          <Botao>Adicionar ao carrinho</Botao>
        </div>
      </CardContainer>
      <PerfilModa />
    </>
  )
}

export default CardPerfil
