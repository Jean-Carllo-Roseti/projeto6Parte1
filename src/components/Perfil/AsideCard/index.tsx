import { CardSide, DescriptionSide, SideImg } from './style'
import lixeira from '../../../assets/images/lixeira.png'
import pizza from '../../../assets/images/pizzaPerfil.png'

const SideCard = () => (
  <CardSide>
    <SideImg src={pizza} alt="imagem do prato." />
    <DescriptionSide>
      <h2>Pizza Marguerita</h2>
      <p>R$ 60,90</p>
      <img src={lixeira} alt="icone de uma lixeira" />
    </DescriptionSide>
  </CardSide>
)

export default SideCard
