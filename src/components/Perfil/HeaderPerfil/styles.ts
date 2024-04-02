import styled from 'styled-components'
import Vector from '../../../assets/images/vector.png'
import { cores } from '../../../styles'

export const HeaderContainer = styled.header`
  background-image: url(${Vector});
`
export const PerfilList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${cores.salmao};
  font-weight: 900;
  font-size: 18px;

  li:first-child {
    margin-right: 96px;
  }

  li:last-child {
    cursor: pointer;
  }
`
export const ContainerPerfil = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const ImaLogo = styled.img`
  margin: 64px 0;
`
