import styled from 'styled-components'
import { cores } from '../../../styles'

export const ContentRecibo = styled.div`
  color: ${cores.trigo};
  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 18.75px;
    margin-bottom: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }
`
export const ButtonRecibo = styled.button`
  color: ${cores.salmao};
  background-color: ${cores.trigo};
  border: none;
  width: 100%;
  padding: 4px 6px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`
