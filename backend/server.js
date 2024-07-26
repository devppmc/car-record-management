const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const carRoutes = require('./routes/car');
const app = express();
const port = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/car-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/api/cars', carRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
