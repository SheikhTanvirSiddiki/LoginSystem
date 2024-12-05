const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userModel = require('./models/user');

const app = express();
const port = process.env.PORT || 3000; // Vercel will provide the port via process.env.PORT

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// Route for homepage
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

// Route for registration page
app.get('/register.html', (req, res) => res.sendFile(path.join(__dirname, '../public/register.html')));

// Registration handler
app.post('/register', async (req, res) => {
  const { phone, password } = req.body;
  try {
    await userModel.createUser(phone, password);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Registration failed');
  }
});

// Login handler
app.post('/login', async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await userModel.verifyUser(phone, password);
    if (user) {
      res.send('Logged in successfully!');
    } else {
      res.status(401).send('Invalid phone number or password');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Login failed');
  }
});

// Start the server with dynamic port for Vercel
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});

