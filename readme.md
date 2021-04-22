
## ⚙️ Objetivo
Uma api de controle de um chat de serviço

## 🌐 Tecnologias e Conceitos Implementados

Esse projeto foi desenvolvido usando as seguintes tecnologias:

- Node (plataforma)
- Typescript (linguagem)

Conceitos/Técnicas utilizadas:

Dependências de produção utilizadas:
- express
- typeorm
- reflect-metadata
- sqlite3
- uuid

Dependências de dev utilizadas:
- ts-node-dev
- typescript

## ✅ Features

* Enviar
* Crud utilizando ORM Entity Framework Core
* Utilizado em repository patterns e interfaces para fazer gestão de desacoplamento
  

## 📂 Arquitetura

### Diagrama
![image](docs/images/diagram.png)

### Arquitetura de pastas
    📦src
    ┣ 📂controllers             interceptam as requições http
    ┣ 📂database                tudo que diz respeito a banco de dados
    ┃ ┣ 📂migrations                rotinas de criação/deleção do banco
    ┃ ┣ 📜database.sqlite           banco de dados SQLITE
    ┣ 📂entities                representação das entidades do banco
    ┣ 📂repositories            classes que servem dados do banco para o app
    ┣ 📂routes                  apontamentos para controllers
    ┃ ┗ 📜routes.ts                 arquivo principal que consolida rotas
    ┣ 📂services                regras de negócios
    ┣ 📜app.ts                  arquivo que inicia o app
    ┗ 📜server.ts               configurações gerais do servidor


## ⛏ Trabalhando com migrations

### criar migrations:

```js
node --require ts-node/register ./node_modules/typeorm/cli.js "migration:create" "-n" "nomeDaMigration"
```
```js
//usando script do package.json
npx typeorm migration:create -n CreateUsers
```

### rodar migrations
```js
npm run typeorm migration:run
```

### voltar migrations
```js
npm run typeorm migration:revert
```

todos:
- criar erros do dominio

## Autor

| [<img src="https://avatars3.githubusercontent.com/u/37452836?s=96&v=4"><br><sub>Felipe Aguiar</sub>](https://github.com/felipeAguiarCode) |
| :---: |
|[Linkedin](www.linkedin.com/in/felipe-aguiar-047)|