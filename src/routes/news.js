const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');

newsRouter.get('/', async (req, res) => {

    try {
        const newsAPI = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/`);
        res.render('news', { articles: newsAPI.data });
    } 

    catch (err) {
        if(err.response) {
            // In case we mispell the API link, we still want to render the page with an error message
            res.render('news', { articles: null });
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);

        } else if (err.request) {
            res.render('news', { articles: null }); // In case we mispell the API link, we still want to render the page with an error message
            console.log(err.request);

        } else {
            res.render('news', { articles: null }); // In case we mispell the API link, we still want to render the page with an error message
            console.error('Error', err.message);
        }
    }
});

newsRouter.get('/article/:id', async (req, res) => {
    // Grabbing ID from params
    let articleID = req.params.id;

    try {
        const newsAPI = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/${articleID}`);
        res.render('newsSingle', { article: newsAPI.data });
    } 

    catch (err) {
        if(err.response) {
            // In case we mispell the API link, we still want to render the page with an error message
            res.render('newsSingle', { article: null });
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);

        } else if (err.request) {
            res.render('newsSingle', { article: null }); // In case we mispell the API link, we still want to render the page with an error message
            console.log(err.request);

        } else {
            res.render('newsSingle', { article: null }); // In case we mispell the API link, we still want to render the page with an error message
            console.error('Error', err.message);
        }
    }
});

// Search
newsRouter.post('/', async (req, res) => {
    // Grabbing value from the form / search button
    let search = req.body.search;

    try {
        const newsAPI = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts?search=${search}`);
        
        res.render('news', { articles: newsAPI.data });
    } 

    catch (err) {
        if(err.response) {
            // In case we mispell the API link, we still want to render the page with an error message
            res.render('news', { articles: null });
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);

        } else if (err.request) {
            res.render('news', { articles: null }); // In case we mispell the API link, we still want to render the page with an error message
            console.log(err.request);

        } else {
            res.render('news', { articles: null }); // In case we mispell the API link, we still want to render the page with an error message
            console.error('Error', err.message);
        }
    }
});

module.exports = newsRouter;