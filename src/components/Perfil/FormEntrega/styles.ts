import styled from 'styled-components'
import { SideButton } from '../AsideList/styles'
import { cores } from '../../../styles'

export const Formulario = styled.form`
  color: ${cores.trigo};
  font-weight: 700;

  input {
    background-color: ${cores.trigo};
    border: none;
    width: 100%;
    padding: 8px;
    margin-bottom: 8px;
    font-size: 14px;
    color: ${cores.letraInpunt};
    font-weight: 700;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  ${SideButton} {
    display: block;
    margin-bottom: 8px;
  }
`
export const Ajuste = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 34px;

  >div: margin-right: 10px;
`
export const Subtitulo = styled.h3`
  color: ${cores.trigo};
  margin-bottom: 16px;
`
export const Buttondiv = styled.div`
  margin-top: 24px;
`
