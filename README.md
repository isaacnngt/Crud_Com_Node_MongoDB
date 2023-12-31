# Desenvolvendo um CRUD simples RESTful API em Node.Js & Express.Js com MongoDb 🚀

Código desenvolvido do tutorial do CRUD em Node.Js, Express e MongoDb, através do meu site: [Code4coders] (www.code4coders.wordpress.com)

## Recursos utilizados no desenvolvimento:

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `Insomnia` | Interface gráfica para realizar os testes, pode-se utilizar o postaman se preferir|
| `MongoDb` | Banco de dados NoSQL orientado a documentos, que armazena dados em formato JSON-like|
| `Mongoose` | Biblioteca para Node.js que simplifica a interação com o MongoDB|
 `JSON` | JSON (JavaScript Object Notation) é um formato de dados|

## Testando a Aplicação no Insomnia ou Postman:

Caso queira testar as API's criadas no projeto, primeiro baixe o programinha Insomnia ou Postman
Depois de realizar o download, basta agora realizar os passos abaiaxo para
poder testar cada API criada!

| ROTA                      | HTTP(Verbo) | Descrição         |
| ------------------------- | ----------- | ----------------- |
| /api/usuarios             | GET         | Selecionar Todos  |
| /api/usuarios             | POST        | Atualizar Por Id  |
| /api/usuarios/:usuario_id | GET         | Selecionar Por Id |
| /api/usuarios/:usuario_id | PUT         | Atualizar Por Id  |
| /api/usuarios/:usuario_id | DELETE      | Excluir Por Id    |

## Executar Localmente

## Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

- **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
- **MongoDb**: Caso também não tenha, basta realizar o download [Aqui](https://www.mongodb.com/download-center#community)

### Instalando as Dependências

Para usar o projeto, faça o clone do repositório para sua máquina local e após rode os seguientes comandos pelo terminal (windows ou Vscode): 

```
npm init -y
```

Para baixar as dependencias do express:

```
npm install express
```

Para baixar as dependencias npm:

```
npm install
```

Para instalar as dependencias a biblioteca do mongo DB:

```
npm install mongoose
```

Para iniciar o projeto:

```
npm start
```

Caso o MongoDb esteja devidamente instalado em sua máquina, ele iniciará o serviço mostrando que a port 3003 foi iniciada.

Agora, abre a página da aplicação em `http://localhost:3003/api`. E pronto a aplicação será executada de maneira local na sua máquina.


