# Teste Tinnova

## Instruções:

Para rodar o app é necessário instalar algumas dependências:

### Descrição:

* Foram utilizados algumas bibliotecas para solução:
 unform : https://unform.dev/ (para controle do formulário)
 react-table: https://react-table.tanstack.com/ (para listagem das informações inseridas)
 yup: https://github.com/jquense/yup (para validação das informações) 

1. É necessário instalar os pacotes de dependências do projeto através do seguinte comando:

```
npm install
 ```
ou
```
yarn 

 ```

2. Após a instalação das depedências listadas acima é só executar o seguinte comando:

```
yarn start
 ```
 Para testar:
 
 ```
npm test
 ```
ou
 ```
yarn test
 ```
 
3. Para rodar a fake API é preciso executar o comando abaixo:
```
json-server db.json --port 3001
 ```

###  Observação:

A fake API precisa estar rodando em http://localhost:3001. Caso prefira utilizar outra porta, será necessário mudar a url de conexão do axios em 'src/services/api.ts'.

