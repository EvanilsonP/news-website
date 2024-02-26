const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;




app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});