require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const express = require('express');
const app = express();

const IBGE_API_URL = process.env.IBGE_API_URL;
const PORT = process.env.PORT;

async function fetchAndSaveData() {
  try {
    const response = await axios.get(IBGE_API_URL);
    const data = response.data;
    
    // Mock no data.json
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));

    console.log('dados salvos');
  } catch (error) {
    console.error(error.message);
    process.exit(1); 
  }
}

async function startServer() {
  await fetchAndSaveData();

  const data = require('./data.json');

  app.get('/dados', (req, res) => {
    res.json(data);
  });

  app.listen(PORT, () => {
    console.log(`API IBGE rodando na porta ${PORT}`);
  });
}

startServer();
