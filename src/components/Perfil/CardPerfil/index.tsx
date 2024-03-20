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

const CardPerfil = () => {
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <>
      <CardContainer>
        <div>
          <img src={pizza} alt="fotografia de um prato do cardápio" />
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
            <h3>Pizza Marguerita</h3>
            <DescriptionPerfil>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
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
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default CardPerfil
