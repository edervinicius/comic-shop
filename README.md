# Getting Started

O app pode ser visto na [Vercel](https://agenzia-marvel-baoc8fkor-edervinicius.vercel.app/).
https://agenzia-marvel-baoc8fkor-edervinicius.vercel.app/

Na página inicial existe um campo para pesquisa de revistas e total de retorno, 10% das revistas retornadas são marcadas como Raras, clicando no botão Buscar é realizada a pesquisa, ao clicar em Limpar o campo é resetado

Ao clicar em uma revista a pagina de informações é carregada, ao clicar em comprar, a revista é adicionada ao carrinho

Na página do carrinho é possível alterar a quantidade do produto, ou remove-lo do carrinho. Pode-se voltar para lista de produtos ou continuar para o Checkout

Na tela de checkout pode-se aplicar duas categorias de cupom de desconto, o código "wolverine" disponibiliza um desconto de 15% para revistas comuns, o cupom "thanos" disponibiliza um desconto de 15% para revistas comuns e raras

Ao clicar em Pagamento o carrinho é zerado e direcionado para página inicial

## Rodando o App localmente

Na pasta inicial do projeto rode o script:

### `npm start`

## Estrutura

O aplicativo foi desenvolvido em ReactJS consumindo a API da Marvel, o Public e Private keys são mantidos no arquivo .env

O carrinho é mantido em sessão no navegador por localStorage

Os cupons de descontos utilizam o serviço de api rest da https://mockapi.io
