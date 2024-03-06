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
  background-image: url(${Macarrao});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${cores.branca};
  font-size: 32px;
  font-weight: 100;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 2;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: 156px;
  }

  p {
    margin-top: 24px;
  }
`

export const ImaLogo = styled.img`
  margin: 64px 0;
`
export const Paragrafo = styled.h2`
  font-size: 32px;
  font-weight: 900;
  padding-bottom: 32px;
`
