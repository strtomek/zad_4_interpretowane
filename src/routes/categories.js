var CategoryServices = require('../services/categoryServices')

module.exports = function (app) {

    app.get('/categories', (req, res, next) => {
        CategoryServices.GetAllCategories()
        .then(success => {
            res.status(200).send(success)
        })
        .catch(error => {
            res.status(500).send(error)
        })
    })

}