const express= require('express'); //se reemplazo la linea de la libreria **para importar la libreria por defecto de node
const clienteRoutes= require('./routes/cliente-routes');
const mascostaRoutes= require('./routes/mascota-routes');

const app= express();
 

const host= 'localhost';
const port= 4141;
app.set('port', port);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(clienteRoutes);
app.use(mascostaRoutes);

//para que corra el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});