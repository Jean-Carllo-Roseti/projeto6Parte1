import { useFormik } from 'formik'
import { ButtonPerfil } from '../ButtonPerfil/styled'
import { Ajuste, Buttondiv, Formulario, Subtitulo } from './styles'
import { useValorTotal } from '../../../Uteis'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../../services/api'
import { useEffect } from 'react'

interface FormPagamentoProps {
  avancaParaEntrega: () => void
  avancaParaRecibo: () => void
}

const FormPagamento = ({
  avancaParaEntrega,
  avancaParaRecibo
}: FormPagamentoProps) => {
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      nome: '',
      numero: '',
      cvv: '',
      mes: '',
      ano: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string().required('O campo é obrigatório'),
      numero: Yup.number().required('O campo é obrigatório'),
      cvv: Yup.number().required('O campo é obrigatório'),
      mes: Yup.number().required('O campo é obrigatório'),
      ano: Yup.number().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        payment: {
          card: {
            name: values.nome,
            number: values.numero,
            code: 123,
            // code: Number(values.cvv),
            expires: {
              month: 12,
              year: 1234
            }
          }
        },
        products: [{ id: 1, price: 0 }]
      })
    }
  })

  const Total = useValorTotal()

  useEffect(() => {
    if (!isLoading && data && !isError) {
      avancaParaRecibo()
    }
  }, [isLoading, data, isError, avancaParaRecibo])

  const checkInputError = (fildName: string) => {
    const estaAlterado = fildName in form.touched
    const estaInvalido = fildName in form.errors
    const hasError = estaAlterado && estaInvalido

    return hasError
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <Subtitulo>Pagamento - Valor a pagar R$ {Total}</Subtitulo>
      <Formulario>
        <label htmlFor="nome">Nome do cartão</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={form.values.nome}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputError('nome') ? 'error' : ''}
        />

        <Ajuste>
          <div>
            <label className="numberw" htmlFor="numero">
              Numero do cartão
            </label>
            <input
              type="number"
              id="numero"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              name="numero"
              value={form.values.numero}
              className={checkInputError('numero') ? 'error' : ''}
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              type="number"
              id="cvv"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              name="cvv"
              value={form.values.cvv}
              className={checkInputError('cvv') ? 'error' : ''}
            />
          </div>
        </Ajuste>
        <Ajuste>
          <div>
            <label htmlFor="mes">Mês de vencimento</label>
            <input
              type="number"
              id="mes"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              name="mes"
              value={form.values.mes}
              className={checkInputError('mes') ? 'error' : ''}
            />
          </div>
          <div>
            <label htmlFor="ano">ano de vencimento</label>
            <input
              type="number"
              id="ano"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              name="ano"
              value={form.values.ano}
              className={checkInputError('ano') ? 'error' : ''}
            />
          </div>
        </Ajuste>
        <Buttondiv>
          <ButtonPerfil type="submit">Finalizar pagamento</ButtonPerfil>
          <ButtonPerfil type="button" onClick={avancaParaEntrega}>
            voltar para edição de endereço
          </ButtonPerfil>
        </Buttondiv>
      </Formulario>
    </form>
  )
}

export default FormPagamento
