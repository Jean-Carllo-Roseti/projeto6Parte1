import { HeroContainer, HeroText, ImgHero } from './styles'

const Hero = () => (
  <HeroContainer>
    <ImgHero src="https://via.placeholder.com/125x57.5" />
    <HeroText className="container">
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </HeroText>
  </HeroContainer>
)

export default Hero
