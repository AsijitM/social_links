//jshint esversion:6

const express = require('express');
const cookieSession = require('cookie-session');
const cors = require('cors');
const passportSetup = require('./passport');
const passport = require('passport');
const authRoute = require('./routes/auth');

const app = express();

app.use(
  cookieSession({
    name: 'session',
    keys: ['lama'],
    maxAge: 24 * 3600 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    credentials: true,
  })
);
app.use('/auth', authRoute);
console.log('Hello');
//TODO

app.listen(5000, function () {
  console.log('Server started on port 5000');
});
