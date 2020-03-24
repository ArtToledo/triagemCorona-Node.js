const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//conectando MongoDB
mongoose.connect('mongodb+srv://ArtToledo:ArtToledo@apptriagemcorona-pr9c6.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use((req, res, next) => {
    req.io = io;

    next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

//porta na qual o servidor vai ser inicializado
const port = 5000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
    console.log('Para derrubar o servidor: ctrl + c');
});