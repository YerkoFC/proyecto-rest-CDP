/* EXPRESS */
const express = require('express');
const app = express();

/* MONGOOSE */
const mongoose =  require('mongoose');


/* BODYPARSER */
const bodyParser = require('body-parser');

/* CONFIGS */
require('./config/config');

/* MIDDLEWARES */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* HEADERS & CORS */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


/* ROUTES */
app.use(require('./routes/index'));
app.use('/api/careers', require('./routes/careers'));


/* CONNECTION DB */
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/careers', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    })
    .then( () => {
        console.log('BD CONNECTED!');
    })

/* STARTING SERVER */
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});
