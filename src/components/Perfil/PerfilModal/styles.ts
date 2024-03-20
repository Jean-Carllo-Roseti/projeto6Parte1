import styled from 'styled-components'
import { cores } from '../../../styles'
import { DescriptionPerfil } from '../CardPerfil/styles'
import { ButtonPerfil } from '../ButtonPerfil/styled'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.2;
    content: '';
  }
`

export const PerfilModal = styled.div`
  position: relative;
  display: flex;
  background-color: ${cores.salmao};
  z-index: 1;

  h3 {
    font-size: 18px;
    font-weight: 900;
  }
`
export const PerfilDetails = styled.div`
  color: ${cores.branca};
  margin: 32px 32px 32px 24px;

  ${DescriptionPerfil} {
    margin: 16px 0;
  }

  ${ButtonPerfil} {
    width: auto;
    padding: 4px 8px;
    margin: 0;
  }
`
export const ImageFechar = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
`
export const ImagePerfil = styled.img`
  width: 280px;
  height: 280px;
  margin: 32px 0 32px 32px;
`
