const express = require('express');
const userModel = require('../model/user.model');

const routes = express.Router({
    mergeParams: true
});

routes.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        messeage: "Nodejs + serverless + awsLambda api call successfull."
    });
});



routes.post('/register', async (req, res) => {
    const user = new userModel(req.body);
    await user.save()
          .then(userItem =>
            res.status(200).json({
                success: true,
                messeage: "Nodejs + serverless + awsLambda api call successfull.",
                data: userItem
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