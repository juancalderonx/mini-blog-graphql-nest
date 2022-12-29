<div style="display:flex; justify-content: center;">
  <p align="center">
    <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  </p>
  <p align="center">
    <a href="https://graphql.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201" width="200" alt="Typescript Logo" /></a>
  </p>
  <p align="center">
    <a href="https://graphql.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png?20161105194737" width="200" alt="Graphql Logo" /></a>
  </p>
</div>

# Post API | NestJs with GraphQL
PostAPI es una API para crear posts como un blog. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint modi inventore, aspernatur suscipit expedita quod excepturi numquam dolore dolorum architecto, iusto molestias assumenda repellat consequatur maiores soluta qui pariatur?

## Development steps

1. Clonar el proyecto con el comando:
    ```
    git clone https://github.com/juancalderonx/nestjs-graphql-first
    ```  

2. Ejecute el comando:
    ```
    yarn install
    ```

3. Clone el archivo ```.env.template``` y renombrarlo a ```.env```

4. Cambiar las variables de entorno.

5. Levantar la base de datos con el siguiente comando:
   
    ```
    docker-compose up -d
    ``` 

6. Ejecutar el seed de posts.
   
    ```
    http://localhost:3000/api/v1/seed
    ``` 

7. Levantar la aplicación con:
    ```
    yarn start:dev
    ```

---