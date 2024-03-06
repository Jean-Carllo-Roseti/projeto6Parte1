import styled from 'styled-components'

import pizza from '../../../assets/images/pizzaPerfil.png'
import { cores } from '../../../styles'
import { SyntaxKind } from 'typescript'

export const CardContainer = styled.div`
  max-width: 320px;
  width: 100%;
  height: 338px;
  color: ${cores.trigo};
  background-color: ${cores.salmao};
  padding: 8px;
`

export const DescriptionPerfil = styled.div`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin-bottom: 8px;

  h3 {
    font-weight: 900;
    margin: 8px 0;
    font-size: 16px;
    line-height: 19px;
  }
`
