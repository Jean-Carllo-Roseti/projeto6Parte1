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
  tipo: 'modal' | 'product'
}

const Botao = ({ children, tipo }: Props) => {
  const [showDiv, setShowDiv] = useState(false)

  // Usando o operador ternário para renderização condicional baseada no tipo
  return (
    <>
      <ButtonPerfil onClick={() => setShowDiv(true)}>{children}</ButtonPerfil>
      {showDiv && (
        <Overlay onClick={() => setShowDiv(false)}>
          <OverlayContent onClick={(e) => e.stopPropagation()}>
            {tipo === 'product' && (
              <>
                <CloseButton onClick={() => setShowDiv(false)}>
                  <CloseIcon src={close} alt="Fechar" />
                </CloseButton>
                <ProductPerfil />
              </>
            )}
          </OverlayContent>
        </Overlay>
      )}
    </>
  )
}

export default Botao
