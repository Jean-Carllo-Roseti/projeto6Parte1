import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { usePurchaseMutation } from '../../../services/api'
import { useValorTotal } from '../../../Uteis'
import { ButtonPerfil } from '../ButtonPerfil/styled'
import {
  Ajuste,
  Buttondiv,
  ContentFormulario,
  Subtitulo,
  Visivel
} from './styles'
import InputMask from 'react-input-mask'

interface FormProps {
  avancaParaRecibo: () => void
  avancaParaCarrinho: () => void
}

const Formulario = ({ avancaParaRecibo, avancaParaCarrinho }: FormProps) => {
  const [purchase, { isError, isLoading, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      code: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('O campo é obrigatório'),
      description: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.number().required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.number().required('O campo é obrigatório'),
      code: Yup.number().required('O campo é obrigatório'),
      month: Yup.number().required('O campo é obrigatório'),
      year: Yup.number().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: 12,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: 123,
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

  const [formularioAtivo, setformularioAtivo] = useState('entrega')

  const avancaParaPagamento = () => {
    setformularioAtivo('pagamento')
  }

  const RetornaParaEntrega = () => {
    setformularioAtivo('entrega')
  }

  useEffect(() => {
    if (!isLoading && data && !isError) {
      // Só avança para o recibo após a confirmação de sucesso da requisição
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
      <Visivel className={formularioAtivo === 'entrega' ? 'is-open' : ''}>
        {' '}
        {/*gostaria q esse formulario desse inicio de maneira visivel}
        <Subtitulo>Entrega</Subtitulo> {/*formulario de entraga */}
        <ContentFormulario>
          <label htmlFor="receiver">Quem ira receber</label>
          <input
            type="text"
            id="receiver"
            name="receiver"
            value={form.values.receiver}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('receiver') ? 'error' : ''}
          />
          <label htmlFor="description">Endereço</label>
          <input
            type="text"
            id="description"
            name="description"
            value={form.values.description}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('endereco') ? 'error' : ''}
          />
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('city') ? 'error' : ''}
          />
          <Ajuste>
            <div>
              <label htmlFor="zipCode">CEP</label>
              <InputMask
                type="text"
                id="zipCode"
                name="zipCode"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                mask="999.999.999-99"
                className={checkInputError('zipCode') ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="number">Numero</label>
              <input
                type="number"
                id="number"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('number') ? 'error' : ''}
              />
            </div>
          </Ajuste>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            type="text"
            id="complement"
            name="complement"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('complement') ? 'error' : ''}
          />
          <Buttondiv>
            <ButtonPerfil type="button" onClick={avancaParaPagamento}>
              Continuar com o pagamento
            </ButtonPerfil>{' '}
            {/*ao clikar neste button o primeiro formulario some e o segundo aparece */}
            <ButtonPerfil type="button" onClick={avancaParaCarrinho}>
              voltar para o carrinho
            </ButtonPerfil>
          </Buttondiv>
        </ContentFormulario>
      </Visivel>
      <Visivel className={formularioAtivo === 'pagamento' ? 'is-open' : ''}>
        {' '}
        {/*seundo formulario a ser exibido, os formulario não podem ser exibido ao mesmo tempo. */}
        <ContentFormulario>
          <Subtitulo>Pagamento - Valor a pagar R$ {Total}</Subtitulo>
          <label htmlFor="cardName">Nome do cartão</label>{' '}
          {/*ContentFormulario de compras */}
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={form.values.cardName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('cardName') ? 'error' : ''}
          />
          <Ajuste>
            <div>
              <label className="numberw" htmlFor="cardNumber">
                Numero do cartão
              </label>
              <input
                type="number"
                id="cardNumber"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="cardNumber"
                value={form.values.cardNumber}
                className={checkInputError('cardNumber') ? 'error' : ''}
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
                className={checkInputError('cvv') ? 'error' : ''}
              />
            </div>
          </Ajuste>
          <Ajuste>
            <div>
              <label htmlFor="month">Mês de vencimento</label>
              <input
                type="number"
                id="month"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="month"
                className={checkInputError('month') ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="year">ano de vencimento</label>
              <input
                type="number"
                id="year"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="year"
                className={checkInputError('year') ? 'error' : ''}
              />
            </div>
          </Ajuste>
          <Buttondiv>
            <ButtonPerfil type="submit">Finalizar pagamento</ButtonPerfil>
            <ButtonPerfil type="button" onClick={RetornaParaEntrega}>
              {/*ao clickar neste botão o estado volte a ser como iniciou, mostre o formulário q estava oculto, primeiro formulario */}
              voltar para edição de endereço
            </ButtonPerfil>
          </Buttondiv>
        </ContentFormulario>
      </Visivel>
    </form>
  )
}

export default Formulario
