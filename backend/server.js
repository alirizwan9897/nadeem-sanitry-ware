const express = require('express');
const cors = require('cors');
const usersRouter = require('./api/users');
const app = express();
const port = Number(process.env.PORT || 4000);
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000"
}));
app.use('/api/users', usersRouter);
app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
