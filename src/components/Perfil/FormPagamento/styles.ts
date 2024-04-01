import styled from 'styled-components'
import { ButtonPerfil } from '../ButtonPerfil/styled'
import { cores } from '../../../styles'

export const Formulario = styled.div`
  color: ${cores.trigo};
  font-weight: 700;

  input {
    background-color: ${cores.trigo};
    border: none;
    width: 100%;
    padding: 8px;
    margin-bottom: 8px;
    font-size: 14px;
    color: #000;
    font-weight: 700;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  ${ButtonPerfil} {
    display: block;
    margin-bottom: 8px;
  }
`
export const Ajuste = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 34px;

  >div: margin-right: 10px;

  .numberw {
    width: 228px;
  }

`
export const Subtitulo = styled.h3`
  color: ${cores.trigo};
  margin-bottom: 16px;
`
export const Buttondiv = styled.div`
  margin-top: 24px;
  margin-bottom: 8px;
`
