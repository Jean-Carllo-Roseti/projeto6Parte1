import { useState } from 'react'
import {
  ButtonPerfil,
  Overlay,
  OverlayContent,
  CloseButton,
  CloseIcon
} from './styled'
import close from '../../../assets/images/close 1.png'
import ProductPerfil from '../ProductPerfil'

export type Props = {
  children: string
}

const Botao = ({ children }: Props) => {
  const [showDiv, setShowDiv] = useState(false)

  return (
    <>
      <ButtonPerfil onClick={() => setShowDiv(true)}>{children}</ButtonPerfil>
      {showDiv && (
        <Overlay onClick={() => setShowDiv(false)}>
          <OverlayContent onClick={(e) => e.stopPropagation()}>
            <ProductPerfil />
            <CloseButton onClick={() => setShowDiv(false)}>
              <CloseIcon src={close} alt="Fechar" />
            </CloseButton>
          </OverlayContent>
        </Overlay>
      )}
    </>
  )
}

export default Botao
