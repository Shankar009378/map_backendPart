const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://nandashankar26:shankarkumarnanda@cluster0.m8ye33b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
