const express = require("express");
const ViteExpress = require("vite-express");
const jobs = require('./api/jobs');
const users = require('./api/users');
const port = 3000;
const app = express();

app.use(express.json());
app.use('/api', jobs);
app.use('/api', users);

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on port ${port}...`)
);
