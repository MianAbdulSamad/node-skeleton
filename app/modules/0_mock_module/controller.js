const {validationResult} = require('express-validator');
const db = require(process.cwd() + "/app/config/sequelize.config")
// const Test = db.test

exports.create = async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(422).json({message: (errors.array().map(val => val.msg))[0]});
    // }
    // const test = {
    //     test_name: req.body.test_name,
    //     category_id: req.body.category_id,
    //     exam_id: req.body.exam_id,
    //     hidden: req.body.hidden.toString().toLowerCase() ===  'true',
    //     status_id: 2,
    // };
    // Test.create(test).then(test => {
    //     return res.status(200).send({
    //         message:'Test Added Successfully',
    //         test_id: test.test_id,
    //         test_name: test.test_name,
    //     })
    // }).catch(_ => {
    //     return res.status(500).send({message:'server error'})
    // })
};

exports.findAll = async (req, res) => {
    // Test.findAll({
    //     attributes:['test_id','test_name'],
    // }).then(tests => {
    //     return res.status(200).send(tests)
    // }).catch(_ => {
    //     return res.status(500).send({message:'server error'})
    // })
};

