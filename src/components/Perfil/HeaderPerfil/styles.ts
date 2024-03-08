import styled from 'styled-components'
import Vector from '../../../assets/images/vector.png'
import Macarrao from '../../../assets/images/macarrao.png'
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
    margin-right: 98px;
  }
`
export const ContainerPerfil = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
export const BannerPerfil = styled.div`
  position: relative;
  background-image: url(${Macarrao});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${cores.branca};
  font-size: 32px;

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: 156px;
  }

  p {
    font-weight: 100;
    margin-top: 24px;
    z-index: 1;
  }

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }
`

export const ImaLogo = styled.img`
  margin: 64px 0;
`
export const SubTitulo = styled.h2`
  font-size: 32px;
  font-weight: 900;
  padding-bottom: 32px;
  z-index: 1;
`
