const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'My API',
      description: 'Description',
    },
    host: 'localhost:2000',
    schemes: ['http'],
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            scheme: 'bearer',
            in: 'header',
        },
    },
    security: [
        {
            bearerAuth: [],

        },
    ],

  };
  
  const outputFile = './swagger.json';
  const endpointsFiles = ['./index.js'];

  swaggerAutogen(outputFile, endpointsFiles, doc);