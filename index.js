const express = require('express');
const { courseRoute } = require('./routes/user');
const { userRoute } = require('./routes/course');
const app = express();


app.use('user',userRoute)
app.use('course',courseRoute)

app.listen(3000);