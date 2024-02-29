import { CardCadapio, TitleCardapio, TextCardapio, ImgCardapio } from './styles'
import Sushi from '../../assets/images/sushi.png'

const Cardapio = () => (
  <CardCadapio>
    <ImgCardapio src={Sushi} alt="Imagem do Prato" />
    <div>
      <TitleCardapio>Nome do Prato</TitleCardapio>
      <TextCardapio>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.
        <br />
        Experimente o Japão sem sair do lar com nosso delivery!
      </TextCardapio>
      <button type="button">Saiba mais</button>
    </div>
  </CardCadapio>
)

export default Cardapio
