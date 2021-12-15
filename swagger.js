const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'NODE API',
            version: '1.0.0',
            description: 'NODE API with express',
        },
        host: 'localhost:3000',
        basePath: '/'
    },
    apis: ['./routes/*.js']
};

const specs = swaggereJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};