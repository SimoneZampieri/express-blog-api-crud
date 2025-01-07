const posts = require('../data/posts')

const index = (req, res) =>{
    res.json(posts);
};

const show = (req,res) =>{
    const post = posts.find(post => {
        post.id == req.params.id
    });

    res.json(post);
};

const destroy = (req,res) => {
    const post = posts.find(post => {
        post.id == req.params.id
    });

    posts.splice(posts.indexOf(post), 1);
};


module.exports = {
    index,
    show,
    destroy
};
