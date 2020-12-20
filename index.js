const express =require('express');
const connectDB = require('./config/connectDB');
const bodyParser = require('body-parser');
const path = require('path');
const seedDB = require('./seeds');

const app =express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectDB();

// seedDB();

app.use('/api/team',require('./routes/api/team'));

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));