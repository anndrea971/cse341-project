const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for storing and retrieving contact information (CSE341 project)'
  },
  host: 'cse341-project-z1h5.onrender.com',
  schemes: ['https'],
  definitions: {
    Contact: {
      firstName: 'Ada',
      lastName: 'Lovelace',
      email: 'ada.lovelace@example.com',
      favoriteColor: 'Purple',
      birthday: '1815-12-10'
    }
  }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// Regenerate swagger.json by scanning the route files.
// Run this again any time you add or change a route: node swagger.js
swaggerAutogen(outputFile, endpointsFiles, doc);
