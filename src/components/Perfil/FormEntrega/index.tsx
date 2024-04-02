import { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { usePurchaseMutation } from '../../../services/api'
import { ButtonPerfil } from '../ButtonPerfil/styled'
import { Ajuste, Buttondiv, Formulario, Subtitulo } from './styles'
import InputMask from 'react-input-mask'

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
      endereco: Yup.string()
        .min(7, 'O nome precisa pelo menos ter 7 caracteres')
        .required('O campo é obrigatório'),
      cidade: Yup.string()
        .min(3, 'O nome precisa pelo menos ter 3 caracteres')
        .required('O campo é obrigatório'),
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
            number: 12,
            complement: values.complemento
          }
        }
      })
    }
  })

  useEffect(() => {
    if (!isLoading && data && !isError) {
      // Só avança para o recibo após a confirmação de sucesso da requisição
      avancaParaPagamento()
    }
  }, [isLoading, data, isError, avancaParaPagamento])

  const checkInputError = (fildName: string) => {
    const estaAlterado = fildName in form.touched
    const estaInvalido = fildName in form.errors
    const hasError = estaAlterado && estaInvalido

    return hasError
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
          className={checkInputError('numero') ? 'error' : ''}
        />

        <label htmlFor="endereco">Endereço</label>
        <input
          type="text"
          id="endereco"
          name="endereco"
          value={form.values.endereco}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputError('numero') ? 'error' : ''}
        />

        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          value={form.values.cidade}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          className={checkInputError('numero') ? 'error' : ''}
        />

        <Ajuste>
          <div>
            <label htmlFor="cep">CEP</label>
            <InputMask
              type="text"
              id="cep"
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              mask="999.999.999-99"
              className={checkInputError('numero') ? 'error' : ''}
            />
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
          className={checkInputError('numero') ? 'error' : ''}
        />

        <Buttondiv>
          <ButtonPerfil type="button" onClick={avancaParaPagamento}>
            Continuar com o pagamento
          </ButtonPerfil>
          <ButtonPerfil type="button" onClick={avancaParaCarrinho}>
            voltar para o carrinho
          </ButtonPerfil>
        </Buttondiv>
      </Formulario>
    </form>
  )
}

export default FormEntrega
