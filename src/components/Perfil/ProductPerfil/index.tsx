import { useState } from 'react'

import { DescriptionPerfil } from '../CardPerfil/styles'
import { CardProduct, Modal, ButtonModal, ImageX, ImgPrato } from './styles'

import pizza from '../../../assets/images/pizzaPerfil.png'
import fechar from '../../../assets/images/fechar.png'

type Props = {
  onFechar: () => void
}

const ProductPerfil = ({ onFechar }: Props) => {
  const [isCardProductVisible, setIsCardProductVisible] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(true)

  // Função para fechar o modal quando o overlay é clicado
  const handleModalClick = (event: React.MouseEvent) => {
    // Verifica se o elemento clicado é o mesmo que o modal (overlay)
    if (event.target === event.currentTarget) {
      setIsModalVisible(false)
    }
  }

  return isModalVisible ? (
    <Modal onClick={handleModalClick}>
      {isCardProductVisible && (
        <CardProduct>
          <ImageX
            src={fechar}
            alt="image de X "
            onClick={(event) => {
              event.stopPropagation() // Impede que o clique no botão fechar propague para o Modal
              setIsModalVisible(false)
              onFechar()
            }}
          />
          <ImgPrato src={pizza} alt="imagem do prato." />
          <DescriptionPerfil>
            <h2>Pizza Marguerita</h2>
            <p>
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
            </p>
            <ButtonModal
              onClick={() => {
                setIsCardProductVisible(false)
                onFechar()
              }}
            >
              Acidionar ao carrinho-R$ 69,90
            </ButtonModal>
            {/*ao clicar neste, a div "CardProduct" deve desaparecer e surgir a "Aside" como um array de itens. */}
          </DescriptionPerfil>
        </CardProduct>
      )}
      <div className="overlay" onClick={() => setIsModalVisible(false)}></div>
    </Modal>
  ) : null
}
export default ProductPerfil
