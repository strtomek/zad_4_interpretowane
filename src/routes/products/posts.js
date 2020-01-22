module.exports = function (app) {
    app.post('/products', (req, res, next) => {
        console.log(req.body.xd);
        res.send('Product post OK');
    })
}