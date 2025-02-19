const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connexion à MongoDB réussie'))
.catch((error) => console.error('Erreur de connexion à MongoDB:', error));

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenue sur EcoRide!');
});

const userRoutes = require('./routes/users');
const rideRoutes = require('./routes/rides');
const adminRoutes = require('./routes/admin');

app.use('/api/users', userRoutes);
app.use('/api/rides', rideRoutes);
app.use('/api/admin', adminRoutes);

app.listen(port, () => {
  console.log(`Serveur EcoRide démarré sur http://localhost:${port}`);
});
