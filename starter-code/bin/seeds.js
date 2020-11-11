const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.js');
const Book = require('../models/Celebrity.js');
const DB_NAME = 'mooovies';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
    {
        name: 'João César Monteiro',
        occupation: 'director',
        catchPhrase: 'Eu quero é que o público se foda'
    }
]

Celebrity.create(celebrities) 
    .then(celebritiesFromDb => {
        console.log(`Created ${celebritiesFromDb.length}`),
        mongoose.connection.close();
    })
    .catch(err => console.log('Ai miga, isto não tá a correr bem'))