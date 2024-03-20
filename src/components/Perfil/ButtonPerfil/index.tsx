import { ButtonPerfil } from './styled'

export type Props = {
  children: string
  onClick?: () => void
}

const Botao = ({ children }: Props) => (
  <>
    <ButtonPerfil type="button">{children}</ButtonPerfil>
  </>
)

export default Botao
