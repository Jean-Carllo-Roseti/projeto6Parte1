import { SideButton } from '../AsideList/styles'
import { Ajuste, Buttondiv, Formulario, Subtitulo } from './styles'

interface FormPagamentoProps {
  avancaParaEntrega: () => void
  avancaParaRecibo: () => void
}

const FormPagamento = ({
  avancaParaEntrega,
  avancaParaRecibo
}: FormPagamentoProps) => (
  <div>
    <Subtitulo>Pagamento - Valor a pagar R$ 190, 90</Subtitulo>
    <Formulario>
      <label htmlFor="nome">Nome do cartão</label>
      <input type="text" name="nome" />
      <Ajuste>
        <div>
          <label className="numberw" htmlFor="numero">
            Numero do cartão
          </label>
          <input type="number" name="numero" />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input type="number" name="cvv" />
        </div>
      </Ajuste>
      <Ajuste>
        <div>
          <label htmlFor="mes">Mês de vencimento</label>
          <input type="number" name="mes" />
        </div>
        <div>
          <label htmlFor="Ano">Ano de vencimento</label>
          <input type="number" name="Ano" />
        </div>
      </Ajuste>
      <Buttondiv>
        <SideButton onClick={avancaParaRecibo}>Finalizar pagamento</SideButton>
        <SideButton onClick={avancaParaEntrega}>
          voltar para edição de endereço
        </SideButton>
      </Buttondiv>
    </Formulario>
  </div>
)

export default FormPagamento
