# wallet-api

## tecnologias usadas
- Typescript
- Express
- Jwt
- Mondo db atlas

## Dscrição
É uma projeto desenvolvido em typescript que tem o intuido de criar o back-end de uma carteira, desenvolvi esse projeto no curos da plataforma Dio, inicialmente ele foi desenvolvido em javascript pelo instrutor, mas eu o convertim em typescript, utiliza-se o Mongo Db como base de dados, Jwt para criação de tokem e garantia pois alguns procedimento necessiytam que o usuarios esteja logado e middlewares para validar se o token estão corretos e todos os campos estão sendo enviados.

## Iniciando projeto 
Após o clone e intalação do typescript rode o comando:  


- npm install

  
Para a instalação da dependencias e crie um arquivo .env e atribua saus credencias as variaveis de ambiente,
Ambiente pronto com o comando:
- npm run start:watch

  
O servidor estara ativo na porta escolhida.

## Para fazer requisições as rotas de GET /me , GET /transaction, POST /transaction precisam que seja enviado um header no modelo:
- key:value
- Authorization : Bearer (E o código jwt criado quando o usuario faz o signin)

  

## Estrutura da requisições 

### Auth
- Sigup
   - {<br>
    "name": "valor",<br>
    "email": "valor",<br>
    "password": "valor"<br>
} 

- Signin
  - {<br>
    "email": "valor",<br>
    "password": "valor"<br>
}


### Transactions

- {<br>
    "value": "valor",<br>
    "description": "valor",<br>
    "type": "valor",<br>
}
