const express = require('express');
const { courseRoute } = require('./routes/user');
const { userRoute } = require('./routes/course');
const { AdminRouter } = require('./routes/admin');

const app = express();


app.use('user',userRoute)
app.use('course',courseRoute)
app.use('admin'),AdminRouter
app.listen(3000);