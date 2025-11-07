const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();

const allowedOrigins = [
  'http://localhost:3000' // for local development
];

app.use(cors({
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
}));

const router = require('./Routes/router');

// Use Render's dynamic port OR 3001 for local development
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});


