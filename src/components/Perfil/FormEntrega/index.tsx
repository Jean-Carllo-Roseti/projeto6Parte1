import { ButtonPerfil } from '../ButtonPerfil/styled'
import { Ajuste, Buttondiv, Formulario, Subtitulo } from './styles'

interface FormEntregaProps {
  avancaParaPagamento: () => void
  avancaParaCarrinho: () => void // Supondo que seja uma função sem parâmetros e retorno void
}

const FormEntrega = ({
  avancaParaPagamento,
  avancaParaCarrinho
}: FormEntregaProps) => (
  <div>
    <Subtitulo>Entrega</Subtitulo>
    <Formulario>
      <label htmlFor="nome">Quem ira receber</label>
      <input type="text" name="nome" />
      <label htmlFor="endereço">Endereço</label>
      <input type="text" name="endereço" />
      <label htmlFor="cidade">Cidade</label>
      <input type="text" name="cidade" />
      <Ajuste>
        <div>
          <label htmlFor="cep">CEP</label>
          <input type="number" name="cep" />
        </div>
        <div>
          <label htmlFor="numero">Numero</label>
          <input type="number" name="numero" />
        </div>
      </Ajuste>
      <label htmlFor="complemento">Complemento (opcional)</label>
      <input type="text" name="complemento" />
      <Buttondiv>
        <ButtonPerfil onClick={avancaParaPagamento}>
          Continuar com o pagamento
        </ButtonPerfil>
        <ButtonPerfil onClick={avancaParaCarrinho}>
          voltar para o carrinho
        </ButtonPerfil>
      </Buttondiv>
    </Formulario>
  </div>
)

export default FormEntrega
