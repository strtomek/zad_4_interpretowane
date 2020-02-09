var category = require('../schemas/category');

function getAll() {
    return category.CategoryModel.find({});
}

exports.GetAllCategories = getAll;
