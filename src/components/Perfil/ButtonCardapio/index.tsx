import { ButtonPerfil } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick: () => void
  children: string
}

const Button = ({ type, children, onClick, title, to }: Props) => {
  if (type === 'button') {
    return (
      <ButtonPerfil type="button" title={title} onClick={onClick}>
        {children}
      </ButtonPerfil>
    )
  }
}

export default Button
