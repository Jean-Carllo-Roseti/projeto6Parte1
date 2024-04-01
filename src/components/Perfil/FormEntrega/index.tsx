import { useFormik } from 'formik'
import { ButtonPerfil } from '../ButtonPerfil/styled'
import { Ajuste, Buttondiv, Formulario, Subtitulo } from './styles'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../../services/api'

interface FormEntregaProps {
  avancaParaPagamento: () => void
  avancaParaCarrinho: () => void
}

const FormEntrega = ({
  avancaParaPagamento,
  avancaParaCarrinho
}: FormEntregaProps) => {
  const [purchase, { isError, isLoading, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(4, 'O nome precisa pelo menos ter 4 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string().required('O campo é obrigatório'),
      cidade: Yup.string().required('O campo é obrigatório'),
      cep: Yup.number()
        .min(8, 'o cep deve conter todos os 8 carateres')
        .required('O campo é obrigatório'),
      numero: Yup.string().required('O campo é obrigatório'),
      complemento: Yup.string()
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.nome,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento
          }
        }
      })
    }
  })

  const getErrorMensage = (fildName: string, message?: string) => {
    const estaAlterado = fildName in form.touched
    const estaInvalido = fildName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <Subtitulo>Entrega</Subtitulo>
      <Formulario>
        <label htmlFor="nome">Quem ira receber</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={form.values.nome}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <small>{getErrorMensage('nome', form.errors.nome)}</small>
        <label htmlFor="endereco">Endereço</label>
        <input
          type="text"
          id="endereco"
          name="endereco"
          value={form.values.endereco}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <small>{getErrorMensage('endereco', form.errors.endereco)}</small>
        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          value={form.values.cidade}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <small>{getErrorMensage('cidade', form.errors.cidade)}</small>
        <Ajuste>
          <div>
            <label htmlFor="cep">CEP</label>
            <input
              type="number"
              id="cep"
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMensage('cep', form.errors.cep)}</small>
          </div>
          <div>
            <label htmlFor="numero">Numero</label>
            <input
              type="number"
              id="numero"
              name="numero"
              value={form.values.numero}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMensage('numero', form.errors.numero)}</small>
          </div>
        </Ajuste>
        <label htmlFor="complemento">Complemento (opcional)</label>
        <input
          type="text"
          id="complemento"
          name="complemento"
          value={form.values.complemento}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
        <small>{getErrorMensage('complemento', form.errors.complemento)}</small>
        <Buttondiv>
          <ButtonPerfil onClick={avancaParaPagamento}>
            Continuar com o pagamento
          </ButtonPerfil>
          <ButtonPerfil onClick={avancaParaCarrinho}>
            voltar para o carrinho
          </ButtonPerfil>
        </Buttondiv>
      </Formulario>
    </form>
  )
}

export default FormEntrega
