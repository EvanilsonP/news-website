const express = require('express');
const newsRouter = express.Router();

newsRouter.get('/', (req, res) => {
    res.render('partials/news');
});

module.exports = newsRouter;