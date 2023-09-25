const express = require("express");
const ViteExpress = require("vite-express");
const jobs = require('./api/jobs');
const users = require('./api/users');
const detailed_jobs = require('./api/detailed_job');
const cities = require('./api/cities');
const countries = require('./api/countries')
const port = 3000;
const app = express();

app.use(express.json());

app.use('/api', jobs);
app.use('/api', users);
app.use('/api', detailed_jobs);
app.use('/api', cities);
app.use('/api', countries);

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on port ${port}...`)
);
