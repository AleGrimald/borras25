const http = require('node:http');

const server = http.createServer((req, res)=>{
    res.end("Este es mi server");
});

server.listen(0, ()=>{
    console.log(`Servidor escuchando el Puerto ${server.address().port}`)
});