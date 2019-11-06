const express = require('express');

let app = express();

app.use((req, res, next) => {
    res.send(`platform: ${process.platform}`);
    next();
})

app.listen(80);

console.log(`platform: ${process.platform}`)