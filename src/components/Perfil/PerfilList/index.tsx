import { Pratos } from '../../../Pages/Home'
import CardPerfil from '../CardPerfil'
import { OpcoesContainer, PerfilList } from './styles'

type Props = {
  pratos: Pratos[]
}

const OpcoesPerfil = ({ pratos }: Props) => {
  return (
    <>
      <OpcoesContainer className="container">
        <PerfilList>
          {pratos.map((prato) => (
            <li key={prato.cardapio.id}>
              <CardPerfil
                //obejto unico sendo passado, diferente do anterior
                cardapio={{
                  foto: prato.cardapio.foto,
                  descricao: prato.cardapio.descricao,
                  nome: prato.cardapio.nome,
                  porcao: prato.cardapio.porcao,
                  preco: prato.cardapio.preco,
                  id: prato.cardapio.id
                }}
              />
            </li>
          ))}
        </PerfilList>
      </OpcoesContainer>
    </>
  )
}

export default OpcoesPerfil

{
  /* <li>
{pratos.map((prato) => ( props separadas, não esta de acordo com a props declarada no CardPerfil
  <CardPerfil
    key={prato.cardapio.id}
    foto={prato.cardapio.foto}
    descricao={prato.cardapio.descricao}
    nome={prato.cardapio.nome}
    porcao={prato.cardapio.porcao}
    preco={prato.cardapio.preco}
  />
))}
</li> */
}
