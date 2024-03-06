import { ButtonPerfil } from './styled'

export type Props = {
  children: string
}

const Botao = ({ children }: Props) => (
  <>
    <ButtonPerfil type="button">{children}</ButtonPerfil>
  </>
)

export default Botao
