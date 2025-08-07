# Nome do Projeto (ex: React Movie Search)

## Descrição

Aplicação web em React que permite buscar filmes consumindo a API OMDb, visualizar detalhes e gerenciar uma lista de favoritos persistida no localStorage.

## Funcionalidades

- Busca de filmes por título
- Paginação de resultados
- Visualização detalhada do filme (diretor, gênero, sinopse, etc)
- Adição e remoção de filmes favoritos
- Favoritos persistidos localmente no navegador
- Navegação entre páginas usando React Router

## Tecnologias

- React 18
- React Router DOM
- Axios para requisições HTTP
- Vite como bundler
- API OMDb para dados dos filmes

## Como rodar o projeto

1. Clone o repositório  
   `git clone https://github.com/seu-usuario/nome-do-repo.git`

2. Entre na pasta do projeto  
   `cd nome-do-repo`

3. Instale as dependências  
   `npm install` ou `yarn install`

4. Inicie o servidor de desenvolvimento  
   `npm run dev` ou `yarn dev`

5. Abra o navegador em `http://localhost:3000` (ou porta que aparecer no terminal)

## API Key

Este projeto utiliza a API OMDb. Você deve substituir a variável `API_KEY` no arquivo `src/api.js` pela sua chave pessoal obtida em http://www.omdbapi.com/apikey.aspx.

## Autor

Maria Eduarda Coelho

---
