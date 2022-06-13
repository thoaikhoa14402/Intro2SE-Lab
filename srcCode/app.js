const express = require('express');
const userRouter = require('./routes/userRoutes');
const app = express();



app.use('/tcf/v1/users', userRouter);