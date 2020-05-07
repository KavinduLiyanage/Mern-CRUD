const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./database/DB.js');

// Express Route
const productRoute = require('./routes/product.route');

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {
    useNewUrlParser: true
}).then(()=> {
    console.log('Database is connected')
    },
    err => {
        console.log('cannot connect to the database' + err)
    }
);

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/product', productRoute);

//PORT
app.listen(PORT,function () {
    console.log('Server is running on port : ',PORT);
});
