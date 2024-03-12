import styled from 'styled-components'
import { cores } from '../../../styles'
import { DescriptionPerfil } from '../CardPerfil/styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;

  .visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`

export const CardProduct = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1024px;
  height: 346px;
  background-color: ${cores.salmao};
  display: flex;
  color: ${cores.trigo};
  z-index: 1;

  ${DescriptionPerfil} {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 32px;
    margin-bottom: 16px;
  }

  p {
    padding: 0 32px 16px 0;
  }
`
export const ButtonModal = styled.button`
  color: ${cores.salmao};
  background-color: ${cores.trigo};
  border: none;
  width: auto;
  padding: 4px 6px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`

export const ImageX = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`

export const ImgPrato = styled.img`
  width: 280px;
  height: 280px;
  margin: 32px 24px 32px 32px;
`
