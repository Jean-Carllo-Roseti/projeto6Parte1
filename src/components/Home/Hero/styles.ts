import styled from 'styled-components'
import { cores } from '../../../styles'
import Vector from '../../../assets/images/vector.png'

export const HeroContainer = styled.div`
  text-align: center;
  padding-bottom: 40px;
  background-image: url(${Vector});
`
export const HeroText = styled.div`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: ${cores.salmao};
  margin-top: 138px;
`

export const ImgHero = styled.img`
  margin-top: 40px;
`
