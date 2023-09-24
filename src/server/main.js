const express = require("express");
const ViteExpress = require("vite-express");
const userRoutes = require('./routes/works');
const port = 3000;
const app = express();

app.use(express.json());
app.use('/api', userRoutes);

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on port ${port}...`)
);
