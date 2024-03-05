import styled from 'styled-components'
import { cores } from '../../styles'
import Sushi from '../../assets/images/sushi.png'
import { TagContainer } from '../Tag/styles'

export const ImgCardapio = styled.div`
  width: 100%;
  max-width: 472px;
  height: 217px;
  background-image: url(${Sushi});
  display: flex;
  flex-direction: row-reverse;

  ${TagContainer} {
    position: absolute;
    margin-top: 16px;
    margin-right: 16px;
  }
`

export const CardCadapio = styled.div``

export const CadapiorLitaTag = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 18px;

  h3 {
    margin-left: 8px;
    line-height: 22px;
  }
`

export const Borda = styled.div`
  border-style: solid;
  border-width: 1px; /* Ajuste a largura conforme necessário */
  border-color: transparent ${cores.salmao} ${cores.salmao} ${cores.salmao};
  background-color: ${cores.branca};
  color: ${cores.salmao};
`

export const TextCardapio = styled.p`
  margin: 16px 8px;
  line-height: 22px;
  font-size: 14px;
`
