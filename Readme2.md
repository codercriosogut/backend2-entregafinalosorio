DB Mongo
mongodb+srv://cri2024:cri2024@cluster0.mswsapd.mongodb.net/clase13_EntregaFinal?retryWrites=true&w=majority&appName=Cluster0

1 clase 12
2 Clase 7
3 Clase 13


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
 












TESTING
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

POST - AGREGAR USUARIOS
||||||||||||||||||||||||||||||||||||
POST - localhost:8080/api/users
Body (Raw, JSON):
{
    "name":"{{$randomFirstName}}",
    "email":"{{$randomEmail}}",
    "role":"admin"
}
{
    "name":"{{$randomFirstName}}",
    "email":"{{$randomEmail}}",
    "role":"user"
}




GET - LISTAR USUARIOS
GET - localhost:8080/api/users

GET - VER USUARIO ESPECIFICO POR IDs
GET - localhost:8080/api/users/#IDs


DELETE - PENDIENTE
PUT - PENDIENTE












%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
1. Crear un Business (Negocio):
Primero, necesitas crear un negocio para referenciarlo en la orden.

Método: POST
URL: localhost:8080/api/business
Body (Raw, JSON):
#CODE#
{
    "name": "MIPC2.CL",
    "products": []
}
#RESULTADO#
{
    "status": "success",
    "result": {
        "name": "MIPC2.CL",
        "products": [],
        "_id": "67104a71a19a6250776916e1",
        "__v": 0
    }
}



%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
2. Crear un User (Usuario):
Crear un usuario para referenciarlo en la orden.

Método: POST
URL: localhost:8080/api/users
Body (Raw, JSON):
#CODE#
{
    "name":"cristian2",
    "email":"cristian2@correo.com",
    "role":"admin"
}
%RESULTADO
{
    "status": "success",
    "result": {
        "name": "cristian2",
        "email": "cristian2@correo.com",
        "role": "admin",
        "orders": [],
        "_id": "67104ac11b0e82a0b53f2f4a",
        "__v": 0
    }
}


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
3. Crear una Order (Orden):
Con el ID del negocio y el ID del usuario obtenidos en los pasos anteriores, ahora puedes crear la orden y agregar productos.

Método: POST
URL: localhost:8080/api/orders
Body (Raw, JSON):

{
    "number": 1,
    "business": "67104a71a19a6250776916e1",
    "user": "67104ac11b0e82a0b53f2f4a",
    "products": [
        {
            "name": "Procesador Intel i5 3.0Ghz",
            "price": 100000
        },
        {
            "name": "Memoria RAM 16GB",
            "price": 80000
        }
    ],
    "totalPrice": 180000,
    "status": "pending"
}
#RESULTADO#
{
    "status": "success",
    "orderResult": {
        "number": 1729121064319,
        "business": "67104a71a19a6250776916e1",
        "user": "67104ac11b0e82a0b53f2f4a",
        "products": [],
        "totalPrice": 0,
        "status": "pending",
        "_id": "67104b1e1b0e82a0b53f2f4e",
        "__v": 0
    }
}


lo ultimo
POST localhost:8080/api/business/67100f17b665b616520e2351/product
#CODE#
{
  "name": "cpu",
  "price": 100
}
#RESULTADO#
{
    "status": "success",
    "result": "Business updated"
}