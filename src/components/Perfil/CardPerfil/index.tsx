import {
  CardContainer,
  DescriptionPerfil,
  ImageFechar,
  ImagePerfil,
  Modal,
  PerfilDetails,
  PerfilModal
} from './styles'

import pizza from '../../../assets/images/pizzaPerfil.png'
import Botao from '../ButtonPerfil'
import { useState } from 'react'

import Pizza from '../../../assets/images/pizzaPerfil.png'
import Fechar from '../../../assets/images/fechar.png'
import { Pratos } from '../../../Pages/Home'

const CardPerfil = ({ cardapio }: Pratos) => {
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <>
      <CardContainer>
        <div>
          <img src={pizza} alt="fotografia de um prato do cardápio" />
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
            <ImagePerfil src={Pizza} alt="imagem da pizza" />
          </div>
          <PerfilDetails>
            <h3>{cardapio.nome}</h3>
            <DescriptionPerfil>
              {cardapio.descricao}
              <br />
              <br />
              Serve: de 2 a 3 pessoas
            </DescriptionPerfil>
            <Botao>Adicionar ao carrinho - R$ 60,90</Botao>
          </PerfilDetails>
          <ImageFechar
            onClick={() => setModalAberto(false)}
            src={Fechar}
            alt="icone de fechar "
          />
        </PerfilModal>
        <div className="overlay" onClick={() => setModalAberto(false)}></div>
      </Modal>
    </>
  )
}

export default CardPerfil
