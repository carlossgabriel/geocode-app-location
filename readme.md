Criação de duas aplicações diferentes para comunicação;

Separadas como aplicação 
    de Servidor :
        .\geocodeSocket\Server
    e Cliente :
        .\geocodeSocket\Client

Requisitos:
    node.js

Executar na pasta de servidor
```$ npm update ```
Repita no client

Para executar:
./Server:
```$ node .\app.js ```
./Client:
```$ node .\app.js ```

Abrir navegador e VRAU
//Server
[localhost:5000](http://localhost:5000)
//Client
[localhost:5001](http://localhost:5001)

Instalação dos requisitos para funcionamento do socket.io:
Necessário que o NODE.js esteja instalado
Express Framework:
$ npm install express --save

APIs do google: javascript maps API, places API, geocoding API;
https://developers.google.com/maps/documentation/javascript/geocoding?hl=pt

API do socket.io:
npm install socket.io
https://socket.io/
