const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.string()
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
});


// schema.validate({ username: 'abc', birth_year: 1994 });
// // -> { value: { username: 'abc', birth_year: 1994 } }

// schema.validate({});
// // -> { value: {}, error: '"username" is required' }

// Also -

module.exports = schema