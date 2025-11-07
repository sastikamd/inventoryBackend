const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./Routes/router');

// Use Render's dynamic port OR 3001 for local development
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});


