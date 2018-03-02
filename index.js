const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

app.listen(PORT, () => {
	console.log('server is up and running at 8080');
});