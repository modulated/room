const express = require('express');
const app = express();

app.use(express.static('assets'));

app.get('/', function (req, res) {
	res.send('index.html');
});

app.listen(17283);
console.log("Server Running...");