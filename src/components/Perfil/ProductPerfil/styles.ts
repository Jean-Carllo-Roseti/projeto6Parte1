import styled from 'styled-components'
import { cores } from '../../../styles'
import { ButtonPerfil } from '../ButtonPerfil/styled'
import { DescriptionPerfil } from '../CardPerfil/styles'

export const CardProduct = styled.div`
  margin: 0 auto;
  width: 1024px;
  background-color: ${cores.salmao};
  z-index: 2;
  display: flex;
  color: ${cores.trigo};

  ${DescriptionPerfil} {
    margin-bottom: 0;
  }

  ${ButtonPerfil} {
    padding: 4px 6px;
    margin-bottom: 60px;
    width: auto;
  }

  img {
    width: 280px;
    height: 280px;
    margin: 32px 24px 32px 32px;
  }

  h2 {
    margin-top: 32px;
    margin-bottom: 16px;
  }

  p {
    padding: 0 32px 16px 0;
  }
`
