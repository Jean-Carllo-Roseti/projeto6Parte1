import Botao from '../ButtonPerfil'
import { DescriptionPerfil } from '../CardPerfil/styles'
import {
  ImageFechar,
  ImagePerfil,
  Modal,
  PerfilDetails,
  PerfilModal
} from './styles'
import Pizza from '../../../assets/images/pizzaPerfil.png'
import Fechar from '../../../assets/images/fechar.png'

const PerfilModa = () => {
  return (
    <Modal className="">
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
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
            <br />
            <br />
            Serve: de 2 a 3 pessoas
          </DescriptionPerfil>
          <Botao>Adicionar ao carrinho - R$ 60,90</Botao>
        </PerfilDetails>
        <ImageFechar src={Fechar} alt="icone de fechar " />
      </PerfilModal>
      <div className="overlay"></div>
    </Modal>
  )
}

export default PerfilModa
