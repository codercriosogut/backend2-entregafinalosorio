<h1 align="center">Sistema de Gestión de Negocios, Órdenes y Usuarios</h1>

<p align="center">
  <a href="#acerca">Acerca</a> &#xa0; | &#xa0; 
  <a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#rutas">Rutas</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#instalacion">Instalacion</a> &#xa0; | &#xa0;
  <a href="#test">Test</a> &#xa0; | &#xa0;
  <a href="https://github.com/codercriosogut/backend2-entregafinalosorio.git" target="_blank">GitHub</a>
</p>

<br>


## Acerca ##

Este proyecto es una API que permite gestionar usuarios, negocios y órdenes de compra, incluyendo la creación de órdenes, la gestión de productos dentro de los negocios, y el envío de correos electrónicos con detalles de las órdenes utilizando Nodemailer.


## Tecnologias ##
- **Node.js**: Plataforma para la ejecución de JavaScript del lado del servidor.
- **Express.js**: Framework para la creación de aplicaciones web y API REST.
- **MongoDB**: Base de datos NoSQL para la persistencia de la información.
- **Mongoose**: ODM (Object Data Modeling) para la conexión y manipulación de MongoDB.
- **Nodemailer**: Librería para el envío de correos electrónicos.
- **JWT (JSON Web Tokens)**: Para la autenticación y autorización.
- **dotenv**: Manejo de variables de entorno.

## Rutas ##

### Usuarios
- `GET /api/users`: Obtiene la lista de usuarios.
- `GET /api/users/:uid`: Obtiene los detalles de un usuario por ID.
- `POST /api/users`: Crea un nuevo usuario.

### Negocios
- `GET /api/business`: Obtiene la lista de negocios.
- `GET /api/business/:bid`: Obtiene los detalles de un negocio por ID.
- `POST /api/business`: Crea un nuevo negocio.
- `POST /api/business/:bid/product`: Añade un producto a un negocio.

### Órdenes
- `GET /api/orders`: Obtiene la lista de órdenes.
- `GET /api/orders/:oid`: Obtiene los detalles de una orden por ID.
- `POST /api/orders`: Crea una nueva orden.
- `POST /api/orders/:oid/resolve`: Marca una orden como resuelta.
- `GET /mail/order/:oid`: Envía un correo electrónico con los detalles de la orden.


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




## Instalacion ##

1. Clona este repositorio:
```bash
# Clone this project
$ git clone https://github.com/codercriosogut/backend2-entregafinalosorio

# Access
$ cd v1

# Install dependencies
$ yarn

# Run the project
$ yarn start

# The server will initialize in the <http://localhost:3000>
```



## Directorios ##
```markdown
📦src
┣ 📂controllers
┃ ┣ 📜business.controller.js
┃ ┣ 📜orders.controller.js
┃ ┗ 📜users.controller.js
┣ 📂dao
┃ ┣ 📂classes
┃ ┃ ┣ 📜business.dao.js
┃ ┃ ┣ 📜business.dto.js
┃ ┃ ┣ 📜order.dao.js
┃ ┃ ┣ 📜order.dto.js
┃ ┃ ┣ 📜ticket.dao.js
┃ ┃ ┣ 📜ticket.model.js
┃ ┃ ┣ 📜user.dao.js
┃ ┃ ┗ 📜user.dto.js
┃ ┗ 📂models
┃ ┃ ┣ 📜business.model.js
┃ ┃ ┣ 📜order.model.js
┃ ┃ ┗ 📜user.model.js
┣ 📂routes
┃ ┣ 📜business.router.js
┃ ┣ 📜orders.router.js
┃ ┗ 📜users.router.js
┣ 📜app.js
┗ 📜middlewares.js
```


## Test ##

# 1.- Usuarios (/api/users)

### A.- Obtener todos los usuarios
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

### B.- Obtener un usuario por ID
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
### C.- Crear un nuevo usuario
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
##
### A.- Obtener todos los negocios
- **Método**: GET
- **URL**: `localhost:8080/api/business`
- **Descripción**: Obtiene una lista de todos los negocios.
#### Respuesta:
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
### B.- Obtener un negocio por ID
- **Método**: GET
- **URL**: `localhost:8080/api/business/6715af4b5845dafea6506c85`
- **Descripción**: Obtiene los detalles de un negocio específico.
#### Respuesta:
```json
{
    "status": "success",
    "result": {
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
}
```
### C.- Crear un nuevo negocio
- **Método**: POST
- **URL**: `localhost:8080/api/business`
- **CUERPO**: (JSON)
- **Descripción**: Obtiene los detalles de un negocio específico.
#### Enviar:
```bash
{
    "name": "mi-empresa",
    "products": []
}
```
#### Respuesta:
```json
{
    "status": "success",
    "result": {
        "id": "6715af4b5845dafea6506c85",
        "name": "mi-empresa",
        "products": []
    }
}
```
### D.- Agregar un producto a un negocio
- **Método**: POST
- **URL**: `localhost:8080/api/business/6715af4b5845dafea6506c85/product`
- **CUERPO**: (JSON)
- **Descripción**: Obtiene los detalles de un negocio específico.
#### Enviar:
```bash
{
    "name": "procesador i7",
    "price": 200000,
    "quantity": 10
}
```
#### Respuesta:
```json
{
    "status": "success",
    "result": "Business updated"
}
```
##
# 3.- Órdenes (/api/orders)
##
### A.- Obtener todas las órdenes
- **Método**: GET
- **URL**: `localhost:8080/api/orders`
- **Descripción**: Obtiene una lista de todas las órdenes.
#### Respuesta:
```json
{
    "status": "success",
    "orders": []
}
```
### B.- Obtener una orden por ID
- **Método**: GET
- **URL**: `localhost:8080/api/orders/6715b7f0b19aaa59fe8d1354`
- **Descripción**: Obtiene los detalles de una orden específica.
#### Respuesta:
```json
{
    "status": "success",
    "order": {
        "id": "6715b7f0b19aaa59fe8d1354",
        "number": 1729476597052,
        "products": [
            {
                "name": "procesador i7",
                "price": 200000
            },
            {
                "name": "ram 16gb",
                "price": 50000
            }
        ],
        "totalPrice": 250000,
        "status": "pending"
    }
}
```
### C.- Crear una nueva orden
- **Método**: POST
- **URL**: `http://localhost:8080/api/orders`
- **CUERPO**: (JSON)
- **Descripción**: Obtiene los detalles de un negocio específico.
#### Enviar:
```bash
{
    "userId": "6715ad2aab4efdd29fad77c0",
    "businessId": "6715af4b5845dafea6506c85",
    "productIds": ["6715b19a5845dafea6506c87", "6715b54eb19aaa59fe8d1330"]
}
```
#### Respuesta:
```json
{
    "status": "success",
    "orderResult": {
        "id": "6715b7f0b19aaa59fe8d1354",
        "number": 1729476597052,
        "products": [
            {
                "name": "procesador i7",
                "price": 200000
            },
            {
                "name": "ram 16gb",
                "price": 50000
            }
        ],
        "totalPrice": 250000,
        "status": "pending"
    }
}
```
### D.- Resolver una orden
- **Método**: PUT
- **URL**: `localhost:8080/api/orders/6715b7f0b19aaa59fe8d1354`
- **Descripción**: Marca una orden como resuelta.
#### Respuesta:
```json
{
    "status": "success",
    "order": {
        "id": "6715b7f0b19aaa59fe8d1354",
        "number": 1729476597052,
        "products": [
            {
                "name": "procesador i7",
                "price": 200000
            },
            {
                "name": "ram 16gb",
                "price": 50000
            }
        ],
        "totalPrice": 250000,
        "status": "resolved"
    }
}
```
### E.- Enviar correo con detalles de la orden
- **Método**: GET
- **URL**: `localhost:8080/api/orders/mail/order/6715b7f0b19aaa59fe8d1354`
- **Descripción**: Envía un correo electrónico con los detalles de la orden.
#### Respuesta 1:
```json
{
    "status": "success",
    "message": "Email sent"
}
```
#### Respuesta 2:
```markdown
Correo enviado:  {
  accepted: [ 'cosoriogut@gmail.com' ],
  rejected: [],
  ehlo: [
    'SIZE 35882577',
    '8BITMIME',
    'AUTH LOGIN PLAIN XOAUTH2 PLAIN-CLIENTTOKEN OAUTHBEARER XOAUTH',
    'ENHANCEDSTATUSCODES',
    'PIPELINING',
    'CHUNKING',
    'SMTPUTF8'
  ],
  envelopeTime: 693,
  messageTime: 901,
  messageSize: 1592,
  response: '250 2.0.0 OK  1729477822 41be03b00d2f7-7eaeabdb784sm1882951a12.91 - gsmtp',
  envelope: { from: 'cosoriogut@gmail.com', to: [ 'cosoriogut@gmail.com' ] },
  messageId: '<2d412a42-3933-45e4-cc8b-33bd99201894@gmail.com>'
}

```
#### Respuesta 3:
```markdown
de:	Cristian Osorio <cosoriogut@gmail.com>
para:	cosoriogut@gmail.com
fecha:	20 oct 2024, 23:30
asunto:	Detalles de la Orden
enviado por:	gmail.com
Detalles de la Orden
¡Gracias por tu pedido!

Resumen de la Orden
Número de Orden: 1729476597052

Estado: resolved

Total: $250000.00

Productos
procesador i7 - $200000.00 x undefined unidad(es)
ram 16gb - $50000.00 x undefined unidad(es)
```