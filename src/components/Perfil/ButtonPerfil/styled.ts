import styled from 'styled-components'
import { cores } from '../../../styles'

export const ButtonPerfil = styled.button`
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
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; // Garante que o overlay esteja acima do conteúdo da página, mas abaixo da div de detalhes
`

export const OverlayContent = styled.div`
  position: relative; // Adicionando isso aqui
  width: 1024px;
  height: 344px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: -10px;
  border: none;
  background: none;
  cursor: pointer;
`

export const CloseIcon = styled.img`
  width: 16px;
  height: 16px;
`
