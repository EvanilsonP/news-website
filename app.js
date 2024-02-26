const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;
const bodyParser = require('body-parser');

// Static File
app.use(express.static('public'));

// Templating Engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use(require('./src/routes/news'));

// Listening on PORT 5000
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});