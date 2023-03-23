# Blogs API :computer:

Neste projeto foi preciso desenvolver uma API para gerenciar postagens de blog e usuários associados. É possível criar, editar e excluir postagens e usuários, além de buscar postagens por nome ou conteúdo.

## Endpoints
<table>
  <thead>
    <tr>
      <th>Método HTTP</th>
      <th>Endpoint</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td>/login</td>
      <td>Valida o usuário que está fazendo login e gera um token</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/user</td>
      <td>Cria um novo usuário e gera um token</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/user</td>
      <td>Lista todos os usuários cadastrados :key:</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/user/:id</td>
      <td>Traz o usuário que possui determinado id :key: </td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/user/me</td>
      <td>Deleta o usuário que está logado :key: </td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/categories</td>
      <td>Cria uma nova categoria de posts :key: </td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/categories</td>
      <td>Lista todas as categorias :key: </td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/post</td>
      <td>Lista todas as postagens :key: </td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/post/:id</td>
      <td>Lista todas a postagem de acordo com seu id :key: </td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/post/:id</td>
      <td>Deleta o post de acordo com seu id e se o post pertence ao usuário que está logado :key: </td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/post</td>
      <td>Cria uma nova postagem :key: </td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/post/:id</td>
      <td>Edita a postagem de acordo com o id e se o post pertence ao usuário que está logado :key: </td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/post/search</td>
      <td>Procura postagens de acordo com seu nome ou conteúdo :key: </td>
    </tr>
  </tbody>
</table>
:key: - Os endpoints que possui este símbolo em sua descrição precisam conter o token gerado nas rotas POST /login ou POST /user nos headers de suas requisições com o nome "Authorization" da seguinte forma: 

[screen-recording.webm](https://user-images.githubusercontent.com/106452876/224504459-8efb1f47-ac1f-46b7-9800-5238a876f871.webm)

## Tecnologias usadas
Back-end:
> Desenvolvido usando: Docker, docker-compose, MySQL, Node.js, Sequelize, JSON Web Token(JWT)

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

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://joanamds.github.io/#/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dev-joanamds/)
