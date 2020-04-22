[OBS: O uso de qualquer API ou BIBLIOTECA terá que ser explicado na apresentação.
Eu irei analisar o código e fazer perguntas (nada demais, a ideia é checar a autoria). 
Na constatação de não autoria, o trabalho pode ser zerado.
Na constatação de falta de funcionalidades, haverá redução de pontos.]

Para o projeto de localização:
LOCALIZAÇÃO:
- O cliente vai ter uma tela em que ele digita um endereço (ex.: Rua Gravatá, 96, Caruaru).
- O servidor vai abrir um MAPA do lugar, mostrando o ponto exato do endereço dado 
(ex.: Quando vc digita um destino no UBER/99).

Criação de duas aplicações diferentes para comunicação;

Separadas como aplicação 
    de Servidor :
        .\geocodeSocket\Server
    e Cliente :
        .\geocodeSocket\Client

$ npm init
=> Define as configurações do express e cria o package.json
=> Define dentro dele as propriedades do projeto
=> Script para execução de cada um dos serviços;
    'npm Server'
    'npm client'

Instalação dos requisitos para funcionamento do socket.io:
Necessário que o NODE.js esteja instalado
Express Framework:
$ npm install express --save

APIs do google: javascript maps API, places API, geocoding API;
https://developers.google.com/maps/documentation/javascript/geocoding?hl=pt



API do socket.io:
npm install socket.io
https://socket.io/
