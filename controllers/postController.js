const posts = require('../data/posts')

const index = (req, res) =>{
    res.json(posts);
};

const show = (req,res) =>{
    const post = posts.find(post => {
        post.id == req.params.id
    });
};

const delete = (req,res) => {
    const post = posts.find(post => {
        post.id == req.params.id
    });
};

