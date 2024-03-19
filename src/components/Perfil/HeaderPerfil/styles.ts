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
  font-weight: 100;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
    content: '';
  }

  p {
    z-index: 1;
    margin-top: 24px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 156px;
  }
`

export const ImaLogo = styled.img`
  margin: 64px 0;
`
export const Paragrafo = styled.h2`
  z-index: 1;
  font-size: 32px;
  font-weight: 900;
  padding-bottom: 32px;
`
