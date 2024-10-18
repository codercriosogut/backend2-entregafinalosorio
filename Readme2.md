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
    "name": "MI-EMPRESA.CL",
    "products": []
}
#RESULTADO#
{
    "status": "success",
    "result": {
        "name": "MI-EMPRESA.CL",
        "products": [],
        "_id": "6712d393b884efeb762edba0",
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
    "name":"cristian",
    "email":"cristian@correo.com",
    "role":"user"
}
%RESULTADO
{
    "status": "success",
    "result": {
        "name": "cristian",
        "email": "cristian@correo.com",
        "role": "user",
        "orders": [],
        "_id": "6712dc4cb884efeb762edba2",
        "__v": 0
    }
}


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
AGREGAR PRODUCTOS A BUSINESS
POST localhost:8080/api/business/6712d393b884efeb762edba0/product
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



CONSULTAR LISTA DE BUSINESS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
POST
localhost:8080/api/business
#RESULTADO#
{
    "status": "success",
    "result": [
        {
            "_id": "6712d393b884efeb762edba0",
            "name": "MI-EMPRESA.CL",
            "products": [
                {
                    "id": "6712dcccb884efeb762edba4",
                    "name": "cpu",
                    "price": 100,
                    "_id": "6712dcccb884efeb762edba6"
                }
            ],
            "__v": 0
        }
    ]
}



CONSULTAR LISTA DE USUARIOS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
POST
localhost:8080/api/users
#RESULTADO#
{
    "status": "success",
    "result": [
        {
            "_id": "6712dc4cb884efeb762edba2",
            "name": "cristian",
            "email": "cristian@correo.com",
            "role": "user",
            "orders": [],
            "__v": 0
        }
    ]
}





CREAR UNA ORDEN A UN USUARIO Y SUS PRODUCTOS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
POST
localhost:8080/api/orders
Body (Raw, JSON):
{
  "businessId": "6712d393b884efeb762edba0",
  "userId": "6712dc4cb884efeb762edba2",
  "productIds": [
    "6712dcccb884efeb762edba4"
  ]
}
#RESULTADO#









%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
REPARADO
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

3. Crear una Order (Orden):
Con el ID del negocio y el ID del usuario obtenidos en los pasos anteriores, ahora puedes crear la orden y agregar productos.

Método: POST
URL: localhost:8080/api/orders
Body (Raw, JSON):

{
  "businessId": "67100f17b665b616520e2351",
  "userId": "67101137b665b616520e2353",
  "productIds": [
    "67106bf0b518d17aef437c91",
    "67106df2b518d17aef437c96"
  ]
}

#RESULTADO#
{
    "status": "success",
    "orderResult": {
        "number": 1729265904024,
        "business": "67100f17b665b616520e2351",
        "user": "67101137b665b616520e2353",
        "products": [
            {
                "id": "67106bf0b518d17aef437c91",
                "name": "cpu",
                "price": 100,
                "_id": "671280e94e476b7b1bafd731"
            },
            {
                "id": "67106df2b518d17aef437c96",
                "name": "ram",
                "price": 50,
                "_id": "671280e94e476b7b1bafd732"
            }
        ],
        "totalPrice": 150,
        "status": "pending",
        "_id": "671280e94e476b7b1bafd730",
        "__v": 0
    }
}









{
  "business": "6712d393b884efeb762edba0",
  "user": "6712dc4cb884efeb762edba2",
  "products": "6712dcccb884efeb762edba4"
}


{
  "userId": "6712dc4cb884efeb762edba2",
  "businessId": "6712d393b884efeb762edba0",
  "productIds": ["6712dcccb884efeb762edba4", "6712de1cb884efeb762edbac"]
}
