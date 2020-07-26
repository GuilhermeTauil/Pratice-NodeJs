const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { dirname } = require('path');

app.use(express.urlencoded({    extended:true   }));
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views' , path.resolve(__dirname, 'src', 'views'));
app.set('views engine', 'ejs');
app.use(routes)

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001')
})

