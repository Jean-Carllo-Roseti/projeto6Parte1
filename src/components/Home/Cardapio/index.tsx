import { Link, useParams } from 'react-router-dom'

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
import { Pratos } from '../../../Pages/Home'
import { useEffect, useState } from 'react'

type Props = Pick<
  Pratos,
  'titulo' | 'descricao' | 'avaliacao' | 'capa' | 'tipo'
> & {
  cardapio?: { id: number }
}

const Cardapio = ({
  tipo,
  titulo,
  descricao,
  avaliacao,
  cardapio,
  capa
}: Props) => {
  const { id } = useParams()

  const [prato, setPratos] = useState<Pratos[]>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes${id}`)
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [id])

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
          <Link to={`perfil/${cardapio?.id ?? 'default'}`}>Saiba mais</Link>
        </Borda>
      </CardCadapio>
    </>
  )
}

export default Cardapio
