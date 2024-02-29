import styled from 'styled-components'
import { cores } from '../styles'

import { Props } from '.'

export const ButtonCard = styled.button<Props>`
  color: ${(props) => (props.type === 'button' ? cores.trigo : cores.salmao)};
  background-color: ${(props) =>
    props.type === 'button' ? cores.salmao : cores.trigo};
`
