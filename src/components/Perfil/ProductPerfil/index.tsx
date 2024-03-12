import pizza from '../../../assets/images/pizzaPerfil.png'
import fechar from '../../../assets/images/fechar.png'
import { DescriptionPerfil } from '../CardPerfil/styles'
import { CardProduct, Modal, ButtonModal, ImageX, ImgPrato } from './styles'

export type Props = {
  // image: string
  // title: string
  // description: string
  onClose: () => void
}

const ProductPerfil = ({ onClose }: Props) => {
  return (
    <Modal className="visivel">
      <CardProduct>
        <ImageX src={fechar} alt="image de X " onClick={onClose} />
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
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
            <br />
            <br />
            Serve: de 2 a 3 pessoas
          </p>
          <ButtonModal>Acidionar ao carrinho-R$ 69,90</ButtonModal>
        </DescriptionPerfil>
      </CardProduct>
      <div className="overlay"></div>
    </Modal>
  )
}
export default ProductPerfil
