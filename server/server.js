const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./Database/Connect');

const register = require('./routes/register.route');
const login = require('./routes/login.route');
const budgetget = require('./routes/budgetget.route');
const budgetpost = require('./routes/budgetpost.route');

require('dotenv').config();
connectDB(process.env.MONGODB_URL);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use('/register',register);
app.use('/login',login);
app.use('/budgetget', budgetget );
app.use('/budgetpost', budgetpost);