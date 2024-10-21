<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="v2" />

  &#xa0;

  <!-- <a href="https://class12arquitecturacompletomain.netlify.app">Demo</a> -->
</div>

<h1 align="center">v2</h1>



<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/{{YOUR_GITHUB_USERNAME}}" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Describe your project

## .env ##

- EMAIL_USER=cosoriogut@gmail.com
- EMAIL_PASS=ccbq crle ovlp xtra
- JWT_SECRET=mySuperSecretKey123!@#

## :rocket: Technologies ##

The following tools were used in this project:

- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/codercriosogut/backend2-entregafinalosorio.git

# Access
$ cd v1

# Install dependencies
$ yarn

# Run the project
$ yarn start

# The server will initialize in the <http://localhost:3000>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/{{YOUR_GITHUB_USERNAME}}" target="_blank">{{YOUR_NAME}}</a>

&#xa0;

<a href="#top">Back to top</a>


📦src
 ┣ 📂controllers
 ┃ ┣ 📜business.controller.js
 ┃ ┣ 📜orders.controller.js
 ┃ ┗ 📜users.controller.js
 ┣ 📂dao
 ┃ ┣ 📂classes
 ┃ ┃ ┣ 📜business.dao.js
 ┃ ┃ ┣ 📜order.dao.js
 ┃ ┃ ┗ 📜user.dao.js
 ┃ ┗ 📂models
 ┃ ┃ ┣ 📜business.model.js
 ┃ ┃ ┣ 📜order.model.js
 ┃ ┃ ┗ 📜user.model.js
 ┣ 📂routes
 ┃ ┣ 📜business.router.js
 ┃ ┣ 📜orders.router.js
 ┃ ┗ 📜users.router.js
 ┗ 📜app.js







## Testing API ##

# 1.- Usuarios (/api/users)

### a. Obtener todos los usuarios
- **Método**: GET
- **URL**: `http://localhost:8080/api/users`
- **Descripción**: Obtiene una lista de todos los usuarios.

#### Respuesta:
```json
{
    "status": "success",
    "users": [
        {
            "id": "6715ad2aab4efdd29fad77c0",
            "name": "cristian",
            "email": "cristian@correo.com",
            "orders": []
        }
    ]
}
```

### b. Obtener un usuario por ID
- **Método**: GET
- **URL**: `localhost:8080/api/users/6715ad2aab4efdd29fad77c0`
- **Descripción**: Obtiene los detalles de un usuario específico.
#### Respuesta:
```json
{
    "status": "success",
    "user": {
        "id": "6715ad2aab4efdd29fad77c0",
        "name": "cristian",
        "email": "cristian@correo.com",
        "orders": []
    }
}
```
### c. Crear un nuevo usuario
- **Método**: POST
- **URL**: `localhost:8080/api/users`
- **CUERPO**: (JSON)
- **Descripción**: Obtiene los detalles de un usuario específico.
#### Enviar:
```bash
{
    "name":"cristian",
    "email":"cristian@correo.com",
    "password": "mySuperSecretKey123!@#"
}
```
#### Respuesta:
```json
{
    "status": "success",
    "user": {
        "id": "6715ad2aab4efdd29fad77c0",
        "name": "cristian",
        "email": "cristian@correo.com",
        "orders": []
    }
}
```
##
# 2.- Negocios (/api/business)
### a. Obtener todos los negocios
- **Método**: GET
- **URL**: `localhost:8080/api/business`
- **Descripción**: Obtiene una lista de todos los negocios.
```json
{
    "status": "success",
    "result": [
        {
            "id": "6715af4b5845dafea6506c85",
            "name": "mi-empresa",
            "products": [
                {
                    "id": "6715b19a5845dafea6506c87",
                    "name": "procesador i7",
                    "price": 200000,
                    "_id": "6715b19a5845dafea6506c89"
                },
                {
                    "id": "6715b54eb19aaa59fe8d1330",
                    "name": "ram 16gb",
                    "price": 50000,
                    "_id": "6715b54eb19aaa59fe8d1333"
                }
            ]
        }
    ]
}
```