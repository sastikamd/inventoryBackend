const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const router = require('./Routes/router');

connectToMongo();

const app = express();

// ✅ Allow only your frontend and localhost
const allowedOrigins = [
  'https://inventorysastika.netlify.app', // Deployed frontend
  'http://localhost:3000' // Local dev
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());
app.use(router);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
