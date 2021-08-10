require("dotenv").config();

//API URLS
const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";
const POKETYPE_API_URL = "https://pokeapi.co/api/v2/type";
const config = {
  HOST: process.env.HOST || "localhost",
};

const HOST = config.HOST;

module.exports = {
  POKE_API_URL,
  POKETYPE_API_URL,
  config,
};
