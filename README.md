# Desafio Nginx com Node.js

Desafio proposto pelo curso Full Cycle para o módulo Docker

## Objetivo

Criar um serviço que seja acessado através de um proxy reverso (nginx) e que retorne `<h1>Full Cycle Rocks!</h1>` mais a lista de nomes cadastrados no banco.
A cada acesso um novo registro deve ser inserido, e a lista dos nomes deve incluí-lo.

## Resultado

Executar o comando `docker compose up -d` e acessar no navegador a url `http://locahost:8080`.