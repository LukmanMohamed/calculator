const db = require("../models");
const Equation = db.equations;

// Create and save the new equation
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content cannot be empty!" });
        return;
    }

    // Create an equation
    const equation = new Equation({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });

    // Save the equation into the database
    equation
        .save(equation)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the equation."
            });
        });
};

// Retrieve all equations from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Equation.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the equation."
            });
        });
};

// Find a single equation specified by the id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Equation.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: "Could not find the equation with id =" + id
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving equation with id = " + id
            });
        })

};

// Update the equation specified by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "The data for the update cannot be empty!"
        });
    }

    const id = req.params.id;

    Equation.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update equation with id = ${id}.`
                });
            } else {
                res.send({
                    message: `Equation with id = ${id} was updated successfully.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating equation with id = ${id}`
            });
        });
};

// Delete the equation specified by the id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Equation.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete equation with id=${id}.`
                });
            } else {
                res.send({
                    message: `Eqaution with id = ${id} was deleted successfully!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error deleting equation with id = ${id}`
            });
        });
};

// Delete all equations from the database.
exports.deleteAll = (req, res) => {
    Equation.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} equations were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Some error occurred while deleting all equations.`
            });
        });
};

// Find all published equations.
exports.findAllPublished = (req, res) => {
    Equation.find({ published: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Some error occurred while retrieving all published equations.`
            });
        });
};