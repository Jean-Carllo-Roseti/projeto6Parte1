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

import Estrela from '../../../assets/images/estrela.png'
import { Restaurante } from '../../../Pages/Home'
import Tag from '../Tag'

type Props = Omit<Restaurante, 'cardapio'>

const Cardapio = ({
  tipo,
  titulo,
  descricao,
  avaliacao,
  capa,
  id,
  destacado
}: Props) => {
  return (
    <>
      <CardCadapio>
        <ImgCardapio capa={capa}>
          <Etiqueta>
            <Tag style={destacado ? {} : { backgroundColor: 'transparent' }}>
              {destacado ? 'Destaque' : ''}
            </Tag>
            <Tag>{tipo}</Tag>
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
          <Link to={`/perfil/${id}`}>Saiba mais</Link>
        </Borda>
      </CardCadapio>
    </>
  )
}

export default Cardapio
