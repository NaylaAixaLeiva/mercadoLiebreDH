//Requerir paquetes
const express = require('express');
const app = express();

const path = require('path');

//Declarar recursos estaticos
app.use(express.static('public'))

//Escuchar el servidor
app.listen(3000, ()=>{
    console.log('Servidor corriendo en http://localhost:3000');
});

//---Rutas---
app.get('/',(req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
})