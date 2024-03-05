import { TagContainer } from './styles'

export type Props = {
  children: string
}

const Tag = ({ children }: Props) => (
  <TagContainer>
    <span>{children}</span>
  </TagContainer>
)

export default Tag
