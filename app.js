require('dotenv').config();
const path = require('path');
const express = require('express');
const methodOverride = require('method-override')
const app = express();
const newItemRouter = require('./routes/newItemRouter');
const updateRouter = require('./routes/updateRouter');
const indexRouter = require('./routes/indexRouter');
const links = require('./links');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// https://expressjs.com/en/api.html#express.urlencoded
// So that "A new `body` object containing the parsed data is populated on the `request` object after the middleware (i.e. `req.body`)"
app.use(express.urlencoded({ extended: true }));

// https://expressjs.com/en/resources/middleware/method-override.html
// See the "override using a query value" section.
app.use(methodOverride('_method'));

app.use('/add', newItemRouter);
app.use('/update', updateRouter);
app.use('/', indexRouter);

app.get('/{*splat}', (req, res) => {
  throw new Error('Page');
});

app.use((err, req, res, next) => {
  res.status(404).render('404', { links, err });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, err => {
  if (err) {
    throw err;
  }

  console.log(`Server running on port ${PORT}`);
});