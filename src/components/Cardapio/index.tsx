import {
  CardCadapio,
  TextCardapio,
  Borda,
  ImgCardapio,
  CadapiorLitaTag,
  Etiqueta,
  LinkPerfil,
  Nota
} from './styles'

import Tag from '../Tag'
import Estrela from '../../assets/images/estrela.png'

export type Props = {
  category: string[]
  title: string
  description: string
  nota: string
  image: string
}

const Cardapio = ({ category, title, description, nota, image }: Props) => (
  <>
    <CardCadapio>
      <ImgCardapio image={image}>
        <Etiqueta>
          {category.map((category) => (
            <Tag key={category}>{category}</Tag>
          ))}
        </Etiqueta>
      </ImgCardapio>
      <Borda>
        <CadapiorLitaTag>
          <li>
            <h3>{title}</h3>
          </li>
          <li>
            <Nota>
              {nota} <img src={Estrela} />
            </Nota>
          </li>
        </CadapiorLitaTag>
        <TextCardapio>{description}</TextCardapio>
        <LinkPerfil href="#">Saiba mais</LinkPerfil>
      </Borda>
    </CardCadapio>
  </>
)

export default Cardapio
