const http= require('http'); // para importar la libreria por defecto de node
const host= 'localhost';
const port= 4141;

const requestlistener= function(req, res)  { //requerimiento y respuesta
    res.writeHead(200);
    res.end('Hola mundo');
}


const server= http.createServer(requestlistener);

server.listen(port, host,()=> {
    console.log(`Nuestro servidor esta corriendo en el puerto ${port} con el host ${host}`);
})
