## Desafio-Precato

-Para teste das rotas e funções foi utilizado o Postman. Parâmetros de inscrição esperados de formulários foram simulados através de JSON no body.

-O Banco de dados utilizado foi o mongoDB, através do mongodbAtlas.
        Para teste do código, é necessário criar um database teste em [Mongodb Cloud](cloud.mongodb.com), e inserir as credenciais de usuário e senha no arquivo app.js, assim ocmo atualizar a URL em app.js em =>
        
`mongoose.connect`

`const DB_USER = seu_usuario`

`const DB_PASSWORD = sua_senha`

### Instalação:

Dependências:

    1. NodeJS
    2. mongoose
    3. express
    4. nodemon

- Com o NodeJS instalado, extraia o projeto em uma pasta do sistema. Através do terminal, navegue até a pasta do projeto e execute:

`npm i`

- A instalação das dependências do package.json devem iniciar.

- Após instalado, na mesma pasta no terminal, execute o comando:

`npm start`.

A aplicação deverá ser acessível por padrão em: **http://localhost:3000/subscribers**
A porta 3000 poderá ser trocada, caso necessário, no arquivo app.js linha15: `app.listen(3000)`

### Postman
No Postman as informações, quando necessário, devem ser enviadas em formato JSON.

```
{
    "name" : "nome",
    "email" : "email"
}
```

Nos métodos GET (usuário único), PATCH e DELETE é esperado que o parâmetro seja informado na url.
`localhost:3000/subscribers/<parametro>`
Sendo o método PATCH utilizado para atualização, também enviar no corpo no formato

```
{
    "name" : "nome",
    "email" : "email"
}
```

as informações que deseja atualizar.