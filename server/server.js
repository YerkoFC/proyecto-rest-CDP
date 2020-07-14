/* EXPRESS */
const express = require('express');
const app = express();


/* CONFIGS */
require('./config/config');


/* MIDDLEWARES */
app.use(express.json());
app.use(express.urlencoded({extended: false}));


/* ROUTES */
app.use(require('./routes/index'));

/* STARTING SERVER */
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});
