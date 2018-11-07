const express =  require('express');
const morgan = require('morgan')
const path = require('path');
const index = require('./routes/index');
const users = require('./routes/users');
const tasks = require('./routes/tasks');
const { mongoose } = require('./database')

const app = express();

// SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('app', 'tasks');
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// MIDDELWARES
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// STATIC
app.use(express.static(path.join(__dirname, 'static')));

// ROUTES
app.use('/', index);
app.use('/users', users);
app.use('/tasks', tasks);

app.get('*', (req, res) => {
    res.render('404', { title: '404', message: '404 Not Found!' });
});

// SERVER
const PORT = app.get('port');
const APP = app.get('app');
app.listen(PORT, () => {
    console.log(`server for ${APP} listening on port ${PORT}!`);
    console.log('Press Ctrl+C to quit.');
});