const express = require('express');
const path = require('path');

const PORT = 3001;
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "/client/build/index.html")));

app.listen(PORT, () => console.log(`listening on ${PORT}`));