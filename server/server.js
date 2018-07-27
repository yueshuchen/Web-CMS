const express = require('express');




const app = express();
const user = require('./user-login');


var mongoose = require('mongoose');

app.use('/api/userInfo', user);


var configDB = require('./config/database.js');
//configuration ===============================================================
mongoose.connect('mongodb://yue:093326Ysc@ds253891.mlab.com:53891/userinfo');



app.listen(4000,function() {
    console.log('listen')
});