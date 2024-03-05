import {
  CardCadapio,
  TextCardapio,
  Borda,
  ImgCardapio,
  CadapiorLitaTag,
  Etiqueta,
  LinkPerfil
} from './styles'

import Nota from '../Nota'
import Tag from '../Tag'

export type Props = {
  child: string[]
}

const Cardapio = ({ child }: Props) => (
  <>
    <CardCadapio>
      <ImgCardapio>
        <Etiqueta>
          {child.map((child) => (
            <Tag key={child}>{child}</Tag>
          ))}
        </Etiqueta>
      </ImgCardapio>
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
        <LinkPerfil href="#">Saiba mais</LinkPerfil>
      </Borda>
    </CardCadapio>
  </>
)

export default Cardapio
