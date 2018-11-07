const mongoose = require('mongoose');

const URI = 'mongodb://localhost/tasks';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;