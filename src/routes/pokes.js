const { Router } = require("express");
const { Pokemon } = require("../db");
const { finalPokes, idPokes, postPokemon } = require("../Handlers/pokemons");
const axios = require("axios");
const router = Router();
// guardar pokemones en la base de datos
router.get("/", finalPokes);
router.get("/:id", idPokes);
router.post("/", postPokemon);

module.exports = router;
