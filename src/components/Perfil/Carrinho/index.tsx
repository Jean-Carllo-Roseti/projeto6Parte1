import SideCard from '../AsideCard'
import { SideButton, SideList } from './styles'

interface CarrinhoProps {
  avancaParaEntrega: () => void // Supondo que seja uma função sem parâmetros e retorno void
}

const Carrinho = ({ avancaParaEntrega }: CarrinhoProps) => (
  <>
    <SideCard />
    <SideCard />
    <SideCard />
    <SideList>
      <li>Valor total</li>
      <li>R$ 182,70</li>
    </SideList>
    <SideButton onClick={avancaParaEntrega}>Continuar com a entrega</SideButton>
  </>
)

export default Carrinho
