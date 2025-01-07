const express = require("express");
const postRouter = require('./postRouter');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Lista post')
});

app.use('/posts', postRouter);

app.listen(port, () =>{
    console.log(`Sono in ascolto sulla porta ${port}`)
});
