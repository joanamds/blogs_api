# Blogs API 

## Tecnologias usadas
Back-end:
> Desenvolvido usando: Docker, docker-compose, MySQL, Node.js, Sequelize

## Instalando Dependências
### Com Docker
> Backend

* Primeiro instale os containers: 
```bash
docker-compose up -d
``` 

* Em seguida abra o terminal interativo do container: 
```bash
docker exec -it blogs_api bash
``` 

* Instale as dependências dentro do container: 
```bash
npm install
``` 

> Para rodar a API 

* Rode o seguinte comando dentro do container: 
```bash
npm run debug
```

> Testes

* Dentro do terminal do container:
```bash
npm test
``` 

### Sem Docker

* Instale as dependências [Caso existam]
```bash
npm install
``` 

* Renomeie o arquivo '.env.example' para '.env'
* Certifique-se que o MySQL está rodando com as configurações necessárias do arquivo '.env'
* Execute a aplicação com 
```bash
npm start
```

Ou: 

```bash
npm run debug
```
