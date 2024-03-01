import styled from 'styled-components'
import { cores } from '../../styles'

export const CardCadapio = styled.div`
  max-width: 472px;
  width: 100%;
  height: 398px;
  font-size: 14px;
  color: ${cores.salmao};
`
export const Borda = styled.div`
  border: solid 1px ${cores.salmao};
  margin-top: -5px;
`

export const TextCardapio = styled.p`
  margin: 16px 8px;
  line-height: 22px;
`

export const ImgCardapio = styled.img`
  width: 472px;
  height: 217px;
`

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
