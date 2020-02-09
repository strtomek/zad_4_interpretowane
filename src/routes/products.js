var ProductServices = require('../services/productServices')

module.exports = function (app) {
    
    app.post('/products', (req, res, next) => {
        let product = {title: req.body.title, description: req.body.description, 
            price: req.body.price, weight: req.body.weight, category: req.body.category}

        ProductServices.PostProduct(product)
        .then(success => {
            res.status(201).send(success)
        })
        .catch(error => {
            res.status(500).send(error)
        })
    })

    app.put('/products:id', (req, res, next) => {
        let product = {title: req.body.title, description: req.body.description, 
            price: req.body.price, weight: req.body.weight, category: req.body.category}    

        ProductServices.UpdateProduct(product, req.params.id)
        .then(success => {
            res.status(201).send(success)
        })
        .catch(error => {
            res.status(500).send(error)
        })
    })

    app.get('/products/:id', (req, res, next) => {
        ProductServices.GetOneProduct(req.params.id)
        .then(success => {
            res.status(200).send(success)
        })
        .catch(error => {
            res.status(500).send(error)
        })
    })

    app.get('/products', (req, res, next) => {
        ProductServices.GetAllProducts()
        .then(success => {
            res.status(200).send(success)
        })
        .catch(error => {
            res.status(500).send(error)
        })
    })

}