require('./models/User')
require('./models/Track')

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const trackRoutes = require('./routes/trackRoutes');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://llzulloll:llzulloll@cluster0.wmnplff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoUri);
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance')
})
mongoose.connection.on('error', err => {
    console.error('error with connection to mongo', err);
})
app.get('/', requireAuth, (req, res) => {
    res.send(`Your Email: ${req.user.email}`)
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
})