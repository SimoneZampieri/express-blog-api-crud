const express = require("express");
const postRouter = require('./postRouter');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const port = 3000;

let posts = [];

app.get('/', (req, res) => {
    res.send('Lista post')
});

app.use('/posts', postRouter);

app.listen(port, () =>{
    console.log(`Sono in ascolto sulla porta ${port}`)
});

app.post('/store', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content,
        images: req.body.images
    };
    posts.push(newPost);
    console.log('Nuovo post aggiunto:', newPost);
    res.status(201).send(newPost);
});