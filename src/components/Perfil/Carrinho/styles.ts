import styled from 'styled-components'
import { cores } from '../../../styles'

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
  margin-bottom: 8px;
`
