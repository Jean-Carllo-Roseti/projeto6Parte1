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

type Props = Omit<Restaurante, 'destacado' | 'id'>

const Cardapio = ({
  tipo,
  titulo,
  descricao,
  avaliacao,
  capa,
  cardapio
}: Props) => {
  const primeiroPratoId = cardapio[0].id

  return (
    <>
      <CardCadapio>
        <ImgCardapio capa={capa}>
          <Etiqueta>{tipo}</Etiqueta>
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
          <Link to={`/perfil/${primeiroPratoId}`}>Saiba mais</Link>{' '}
          {/*o erro esta aqui o no cardapiolist.index.tsx */}
        </Borda>
      </CardCadapio>
    </>
  )
}

export default Cardapio
