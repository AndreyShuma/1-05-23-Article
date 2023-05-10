const express = require('express');
const Ajv = require('ajv');
const ajv = new Ajv();

const router = express.Router();

const schema = {
    type: "object",
    properties: {
        params: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    name:{type: "string"},
                    age:{type: "integer"},
                    gender: {type: "string"},
                    adress : {
                        type: "object",
                        properties: {
                            city: {type: "string"},
                            street: {type: "string"},
                            house: {type: "integer"}
                        },
                        required: ["city", "street", "house"],
                    },
                },
                required: ["name", "age","gender", "adress"],
            },
        },
    },
    required: ["params"],
    additionalProperties: false
  };
  
const validate = ajv.compile(schema);


router.get('/', (req, res) => {
    // console.log('req.query', req.query);
    res.render('indexForm');
});

router.post('/formtest', (req, res) => {
    // console.log('req.query >>>>>>',  req.query);
    const dataFront = req.body;
    console.log('dataFront>>>>>>',  dataFront);

    const valid = validate(dataFront);
    // console.log('validate >>>>>', validate);
    console.log('valid >>>>>', valid);
    res.json({valid: validate.errors});
})

module.exports = router;