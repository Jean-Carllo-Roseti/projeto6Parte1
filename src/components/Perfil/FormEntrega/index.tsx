import { SideButton } from '../AsideList/styles'
import { Ajuste, Buttondiv, Formulario, Subtitulo } from './styles'

const FormEntrega = () => (
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
        <SideButton>Continuar com o pagamento</SideButton>
        <SideButton>voltar para o carrinho</SideButton>
      </Buttondiv>
    </Formulario>
  </div>
)

export default FormEntrega
