const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;
// const newsRouter = require('./src/routes/news.js');

// Static File
app.use(express.static('public'));

// Templating Engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

//Routes
app.use(require('./src/routes/news'));

// Listening on PORT 5000
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});