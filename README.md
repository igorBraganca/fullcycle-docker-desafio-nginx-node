# Desafio Nginx com Node.js

Desafio proposto pelo curso Full Cycle para o módulo Docker

## Objetivo

Criar um serviço que seja acessado através de um proxy reverso (nginx) e que retorne `<h1>Full Cycle Rocks!</h1>` mais a lista de nomes cadastrados no banco.
A cada acesso um novo registro deve ser inserido, e a lista dos nomes deve incluí-lo.

## Resultado

Executar o comando `docker compose up -d` e acessar no navegador a url `http://locahost:8080`.

## Ambiente de desenvolvimento

Para o desenvolvimento utilizar o container padrão criado com o `docker compose -f ./docker-compose.dev.yaml up -d --build`.
Esse comando irá iniciar um container padronizado com as dependências pré configuradas e com a pasta local `./app` mapeada para o volume `/app`, assim qualquer alteração feita na pasta local irá refletir no container.

Para inicialização do app executar `docker exec -d app npm run dev`. O app está disponível em `http://localhost:3000`