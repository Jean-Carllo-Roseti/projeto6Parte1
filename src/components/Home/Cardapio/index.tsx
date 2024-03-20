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
import { Pratos } from '../../../Pages/Home'

type Props = Pick<
  Pratos,
  'titulo' | 'descricao' | 'avaliacao' | 'capa' | 'tipo'
>

const Cardapio = ({ tipo, titulo, descricao, avaliacao, capa }: Props) => (
  <>
    <CardCadapio>
      <ImgCardapio capa={capa}>
        <Etiqueta>
          {tipo.map((tipo) => (
            <Tag key={tipo}>{tipo}</Tag>
          ))}
        </Etiqueta>
      </ImgCardapio>
      <Borda>
        <CadapiorListaTag>
          <li>
            <h3>{titulo}</h3>
          </li>
          <li>
            <Nota>
              {avaliacao} <ImgEstrela src={Estrela} />
            </Nota>
          </li>
        </CadapiorListaTag>
        <TextCardapio>{descricao}</TextCardapio>
        <Link to="/perfil">Saiba mais</Link>
      </Borda>
    </CardCadapio>
  </>
)

export default Cardapio
