const path = require('path');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));
app.set('views', path.join(__dirname, './views/'));
app.use('/views', express.static(path.join(__dirname, './views/')));
app.engine('html', require('express-art-template'));

const router = require('./router/router.js');
app.use(router);

app.listen('3000', (req, res) => {
    console.log('3000端口已启动......');
})
