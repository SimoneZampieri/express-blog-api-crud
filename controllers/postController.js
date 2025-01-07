
exports.getAllPosts = (req, res) => {
    res.send("Restituisce tutti i post");
};

exports.getPostById = (req, res) => {
    res.send(`Restituisce il post con ID ${req.params.id}`);
};

exports.deletePostById = (req, res) => {
    res.status(204).send();
};



