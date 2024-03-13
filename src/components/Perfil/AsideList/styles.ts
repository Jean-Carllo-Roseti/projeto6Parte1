import styled from 'styled-components'
import { cores } from '../../../styles'
import { Props } from '.'

export const Side = styled.div<Props>`
  position: absolute;
  top: 0;
  right: 0;
  width: 360px;
  background-color: ${cores.salmao};
  padding: 32px 8px;
  height: 200%;
  display: block;
  z-index: 1;
`
export const SideList = styled.ul`
  font-weight: 700;
  font-size: 14px;
  color: ${cores.trigo};
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`
export const SideButton = styled.button`
  color: ${cores.salmao};
  background-color: ${cores.trigo};
  border: none;
  width: 100%;
  padding: 4px 6px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`
