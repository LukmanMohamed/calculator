module.exports = app => {
    const equations = require("../controllers/equation.controller.js");

    var router = require("express").Router();

    // Create a new equation
    router.post("/", equations.create);

    // Retreive all equations
    router.get("/", equations.findAll);

    // Retrieve all published equations
    router.get("/published", equations.findAllPublished);

    // Retrieve a single equation specified by the id
    router.get("/:id", equations.findOne);

    // Update an equation specified by the id
    router.put("/:id", equations.update);

    // Delete an equation specified by the id
    router.delete("/:id", equations.delete);

    // Delete all equations
    router.delete("/", equations.deleteAll);

    app.use('/api/equations', router);
};