import { TagContainer } from './styles'

export type Props = {
  children: string
}

const Tag = ({ children }: Props) => (
  <TagContainer>
    <a>{children}</a>
  </TagContainer>
)

export default Tag
