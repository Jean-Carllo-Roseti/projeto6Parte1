import { Link } from 'react-router-dom'

import {
  CardCadapio,
  TextCardapio,
  Borda,
  ImgCardapio,
  CadapiorListaTag,
  Etiqueta,
  Nota,
  ImgEstrela
} from './styles'

import Tag from '../Tag'
import Estrela from '../../../assets/images/estrela.png'

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
        <CadapiorListaTag>
          <li>
            <h3>{title}</h3>
          </li>
          <li>
            <Nota>
              {nota} <ImgEstrela src={Estrela} />
            </Nota>
          </li>
        </CadapiorListaTag>
        <TextCardapio>{description}</TextCardapio>
        <Link to="/perfil">Saiba mais</Link>
      </Borda>
    </CardCadapio>
  </>
)

export default Cardapio
