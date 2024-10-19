1.- CREAR NEGOCIO
Método: POST
URL: localhost:8080/api/business
Body (Raw, JSON)
CODE:
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
        "_id": "6712f75e46018719e2792e4f",
        "__v": 0
    }
}




2.-CREAR USUARIO
Método: POST
URL: localhost:8080/api/users
Body (Raw, JSON)
CODE:
{
    "name":"cristian",
    "email":"cristian@correo.com",
    "role":"user"
}
#RESULTADO#
{
    "status": "success",
    "result": {
        "name": "cristian",
        "email": "cristian@correo.com",
        "role": "user",
        "orders": [],
        "_id": "6712f79a46018719e2792e51",
        "__v": 0
    }
}



3.-AGREGAR PRODUCTOS AL NEGOCIO
Método: POST 
URL: localhost:8080/api/business/6712f75e46018719e2792e4f/product
Body (Raw, JSON)
CODE:
{
  "name": "cpu",
  "price": 100
}
#RESULTADO#
{
    "status": "success",
    "result": "Business updated"
}


4.- CONSULTAR NEGOCIO Y SUS PRODUCTOS
Método: GET 
URL: localhost:8080/api/business
#RESULTADO#
{
    "status": "success",
    "result": [
        {
            "_id": "6712f75e46018719e2792e4f",
            "name": "MI-EMPRESA.CL",
            "products": [
                {
                    "id": "6712f7d246018719e2792e53",
                    "name": "cpu",
                    "price": 100,
                    "_id": "6712f7d246018719e2792e55"
                }
            ],
            "__v": 0
        }
    ]
}


5.- CONSULTAR LISTA DE USUARIOS
Método: GET 
URL: localhost:8080/api/users
#RESULTADO#
{
    "status": "success",
    "result": [
        {
            "_id": "6712f79a46018719e2792e51",
            "name": "cristian",
            "email": "cristian@correo.com",
            "role": "user",
            "orders": [],
            "__v": 0
        }
    ]
}


6.- CONSULTAR USUARIO ESPECIFICO
Método: GET 
URL: localhost:8080/api/users/6712f79a46018719e2792e51
#RESULTADO#
{
    "status": "success",
    "result": {
        "_id": "6712f79a46018719e2792e51",
        "name": "cristian",
        "email": "cristian@correo.com",
        "role": "user",
        "orders": [],
        "__v": 0
    }
}


7.- AGREGAR PRODUCTOS AL USUARIOS SEGUN SU NEGOCIO
Método: POST
URL: localhost:8080/api/orders
Body (Raw, JSON)
{
  "businessId": "6712f75e46018719e2792e4f",
  "userId": "6712f79a46018719e2792e51",
  "productIds": [
    "6712f7d246018719e2792e53"
  ]
}

OTRO EJEMPLO
{
    "businessId": "6712f75e46018719e2792e4f",
    "userId": "6712f79a46018719e2792e51",
    "productIds": ["6712f7d246018719e2792e53"]
}


#RESULTADO#
{
    "status": "success",
    "orderResult": {
        "number": 1729296924734,
        "business": "6712f75e46018719e2792e4f",
        "user": "6712f79a46018719e2792e51",
        "products": [
            {
                "id": "6712f7d246018719e2792e53",
                "name": "cpu",
                "price": 100,
                "_id": "6712fa1746018719e2792e62"
            }
        ],
        "totalPrice": 100,
        "status": "pending",
        "_id": "6712fa1746018719e2792e61",
        "__v": 0
    }
}


8.- Mail
Método: GET 
URL: localhost:8080/api/orders/mail/order/6712fa1746018719e2792e61
#RESULTADO#
Correo enviado exitosamente
#RESULTADO#
Server is running on port 8080
Conexión a MongoDB establecida
Correo enviado:  <d400845f-0c3f-f425-6fa1-67e36dde6933@gmail.com>
#RESULTADO#
de:	Cristian Osorio <cosoriogut@gmail.com>
para:	cosoriogut@gmail.com
fecha:	19 oct 2024, 19:40
asunto:	Detalles de la Orden
enviado por:	gmail.com
Detalles de la Orden
Gracias por tu pedido!
Detalles de la Orden:
Número: 1729296924734
Estado: pending
Total: 100
Productos:
cpu - $100