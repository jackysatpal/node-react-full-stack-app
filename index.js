const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const keys = require('./config/keys');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();
const PORT = process.env.PORT || 8080;

require('./routes/authRoutes')(app);

app.listen(PORT, () => {
	console.log(`server is up and running at ${PORT}`);
});