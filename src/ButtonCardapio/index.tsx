import { ButtonCard } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick: () => void
  children: string
}

const Button = ({ type, children, onClick, title, to }: Props) => {
  if (type === 'button' && to) {
    return (
      <ButtonCard type="button" title={title} onClick={onClick}>
        {children}
      </ButtonCard>
    )
  }

  return (
    <ButtonCard as="a" href={to} title={title}>
      {children}
    </ButtonCard>
  )
}

export default Button
