require('dotenv').config();
const axios = require('axios');
const express = require('express');
const app = express();

const API_URL = process.env.API_URL;

async function fetchData() {
  try {
    const response = await axios.get(`${API_URL}/dados`);
    const dados = response.data;
    
    console.log(dados);
    return dados;
  } catch (error) {
    console.error(error.message);
    process.exit(1); 
  }
}

async function startServer() {
  app.get('/fetch', async (req, res) => {
    await fetchData();
  });

  app.listen(process.env.PORT, () => {
    console.log(`API Governo rodando na porta ${process.env.PORT}`);
  });
}

startServer();
