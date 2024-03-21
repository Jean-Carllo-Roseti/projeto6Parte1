import {
  CardContainer,
  DescriptionPerfil,
  ImageFechar,
  ImagePerfil,
  Modal,
  PerfilDetails,
  PerfilModal
} from './styles'

import Botao from '../ButtonPerfil'
import { useState } from 'react'
import { Pratos } from '../../../Pages/Home'

import Fechar from '../../../assets/images/fechar.png'

// type CardapioPros = {
//   foto: string
//   preco: string
//   nome: string
//   descricao: string
//   porcao: string
// }

type Props = Pick<Pratos, 'cardapio'>
const CardPerfil = ({ cardapio }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <>
      <CardContainer>
        <div>
          <img src={cardapio.foto} alt="fotografia de um prato do cardápio" />
        </div>
        <DescriptionPerfil>
          <h3>{cardapio.nome}</h3>
          <p>{cardapio.descricao}</p>
        </DescriptionPerfil>
        <div>
          <Botao onClick={() => setModalAberto(true)}>
            Adicionar ao carrinho
          </Botao>
        </div>
      </CardContainer>
      <Modal className={modalAberto ? 'visible' : ''}>
        <PerfilModal className="container">
          <div>
            <ImagePerfil src={Fechar} alt="imagem da pizza" />
          </div>
          <PerfilDetails>
            <h3>{cardapio.nome}</h3>
            <DescriptionPerfil>
              {cardapio.descricao}
              <br />
              <br />
              {cardapio.porcao}
            </DescriptionPerfil>
            <Botao>Adicionar ao carrinho - R$ 70,00</Botao>
          </PerfilDetails>
          <ImageFechar
            onClick={() => setModalAberto(false)}
            src={Fechar}
            alt="icone de fechar"
          />
        </PerfilModal>
        <div className="overlay" onClick={() => setModalAberto(false)}></div>
      </Modal>
    </>
  )
}

export default CardPerfil
