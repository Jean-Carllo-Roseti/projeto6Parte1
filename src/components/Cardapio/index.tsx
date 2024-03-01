import {
  CardCadapio,
  TextCardapio,
  ImgCardapio,
  CadapiorLitaTag,
  Borda
} from './styles'

import Sushi from '../../assets/images/sushi.png'
import Nota from '../Nota'

const Cardapio = () => (
  <CardCadapio>
    <ImgCardapio src={Sushi} alt="Imagem do Prato" />
    <Borda>
      <CadapiorLitaTag>
        <li>
          <h3>Nome do Prato</h3>
        </li>
        <li>
          <Nota />
        </li>
      </CadapiorLitaTag>
      <TextCardapio>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.
        <br />
        Experimente o Japão sem sair do lar com nosso delivery!
      </TextCardapio>
      <button type="button">Saiba mais</button>
    </Borda>
  </CardCadapio>
)

export default Cardapio
