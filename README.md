# desafio-descomplica-back

Esse projeto se refere a uma API em GraphQL que retorna dados (nome, cpf e email) de 100 alunos. 

## Como executar esse projeto

No diretório do projeto, você pode executar: 

### `npm install`
### `npm start`

Ou pode criar e rodar uma imagem docker 

### `docker build . -t pauloendoh/descomplica-back`
### `docker run -p 8000:8000 -d pauloendoh/descomplica-back`

Com o projeto executando, você pode testar as queries GraphQL em:

### `http:localhost:8000/graphql`

## Exemplos de queries GraphQL

Retorna todos os alunos:
```
query {
  getAlunos{
    nome
    email
    cpf
  }
}
```

Retorna alunos que possuem "ken" no nome:
```
query {
  getAlunos (nome:"ken"){
    nome
    email
    cpf
  }
}
```
