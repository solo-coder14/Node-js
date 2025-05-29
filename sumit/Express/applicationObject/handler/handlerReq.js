const handle = (req, res) => {
    console.log(req.app.locals.title);
    res.send('Hello World!')
};

module.exports = handle;