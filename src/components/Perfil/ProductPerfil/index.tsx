import pizza from '../../../assets/images/pizzaPerfil.png'
import ButtonPerfil from '../ButtonPerfil'
import { DescriptionPerfil } from '../CardPerfil/styles'
import { CardProduct } from './styles'

// export type Props = {
//   image: string
//   title: string
//   description: string
// }

const ProductPerfil = () => (
  <CardProduct>
    <img src={pizza} alt="imagem do prato." />
    <DescriptionPerfil>
      <h2>Pizza Marguerita</h2>
      <p>
        A pizza Margherita é uma pizza clássica da culinária italiana,
        reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
        uma base de massa fina e crocante, coberta com molho de tomate fresco,
        queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva
        extra-virgem. A combinação de sabores é perfeita, com o molho de tomate
        suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas
        de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma
        pizza simples, mas deliciosa, que agrada a todos os paladares e é uma
        ótima opção para qualquer ocasião.
        <br />
        <br />
        Serve: de 2 a 3 pessoas
      </p>
      <ButtonPerfil tipo={'modal'}>Acidionar ao carrinho-R$ 69,90</ButtonPerfil>
    </DescriptionPerfil>
  </CardProduct>
)

export default ProductPerfil
