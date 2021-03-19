const express = require('express');
const TodoItem = require('../model/todo.model');

const routes = express.Router({
    mergeParams: true
});

routes.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        messeage: "Nodejs + serverless + awsLambda api call successfull."
    });
});



routes.post('/', (req, res) => {
    const user = new TodoItem(req.body);
        user.save()
          .then(todoitem =>
            res.status(200).json({
                success: true,
                messeage: "Nodejs + serverless + awsLambda api call successfull.",
                data: todoitem
            })
        ).catch(err =>
            res.status(500).json({
                success: false,
                messeage: "Could not create the item."
            })
        );
});


module.exports = {
    routes,
};