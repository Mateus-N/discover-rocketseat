// Importando funções do react router
import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams
} from 'react-router-dom'
// importando a função getInvoices do arquivo data
import { getInvoices } from '../../data'

// Função a ser exportada
export default () => {

  // Função que ao clicar em algum link o input de pesquisa não é limpo e mantem o filtro
  function QueryNavLink({ to, ...props }) {
    let location = useLocation()
    return <NavLink to={to + location.search} {...props} />
  }

  // Ativação da função getInvoices
  let invoices = getInvoices()

  // Criação da função para uso dos parametros da URL
  let [searchParams, setSearchParams] = useSearchParams()

  // Retorno da função exportada
  return (

    // Div que será exibida
    <div style={{ display: 'flex' }}>

      {/* Menu que será mostrado */}
      <nav
        // Estilo inline do menu
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >

        {/* Barra de pesquisa acima do menu */}
        <input

          // Definição do nome do parametro da URL
          value={searchParams.get('filter') || ''}

          // Monitoramento de mudanças no input
          onChange={(event) => {

            // declaração da variável filter, caso tenha conteúdo no input
            let filter = event.target.value

            // se filter existe é adionada a variável searchParams
            if (filter) {
              setSearchParams({ filter })
            } else {
              setSearchParams({})
            }
          }}
        />

        {/* Exibição dos invoices */}
        {invoices
          // Execução do filtro que foi criado acima
          .filter((invoice) => {
            let filter = searchParams.get('filter')

            // se o filtro não existe
            if (!filter) return true

            // se existe
            let name = invoice.name.toLowerCase()
            return name.startsWith(filter.toLowerCase())
          })

          // Exibição de todos os invoices
          .map((invoice) => (

            // Transformação de cada invoice em um link
            <QueryNavLink

              // Criação de função para verificar qual o link ativo e alterar sua cor
              style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? 'red' : ''
              })}

              // Caminho do link
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </QueryNavLink>
          ))
        }
      </nav>
      <Outlet />
    </div>
  )
}

/*
{
  pathname: "/invoices",
  search: "?filter=sa",
  hash: "",
  state: null,
  key: "ae4cz2j"
}
*/