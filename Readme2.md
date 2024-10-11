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
 


 POSTMAN
 POST - localhost:8080/api/users
 {
    "name":"{{$randomFirstName}}",
    "email":"{{$randomEmail}}",
    "role":"user",
 }

 GET - localhost:8080/api/users
 GET - localhost:8080/api/users/#IDs


MONGO
test
users
    XXXX


