# Ignite Challenge Node.js

Este é um projeto de CRUD (Create, Read, Update, Delete) de tarefas, onde você pode gerenciar suas tarefas de forma simples e eficiente. Ele também oferece suporte para importação de tarefas através de arquivos CSV.

## Funcionalidades

- **CRUD de Tarefas**: Adicione, leia, atualize e remova tarefas conforme necessário.
- **Importação via CSV**: Importe facilmente suas tarefas a partir de um arquivo CSV.
- **Stream de dados**: Eficiência na gravação da base com stream de dados do Node

## Pré-requisitos

- Node.js instalado

## Instalação

1. Clone este repositório:

`git clone https://github.com/everson-barbosa/ignite-challenge-nodejs.git`

2. Navegue até o diretório do projeto:

`cd ignite-challenge-nodejs`

3. Instale as dependências do projeto:

- npm: `npm install` ou `npm`
- yarn: `yarn install` ou `yarn`

## Uso

1. Inicie o servidor:

`yarn dev` 

## Rotas

- GET    - `/tasks`                
- POST   - `/tasks`                
- POST   - `/tasks/import`         
- PUT    - `/tasks/:id`            
- PATCH  - `/tasks/:id/complete`   
- DELETE - `/tasks/:id` 
