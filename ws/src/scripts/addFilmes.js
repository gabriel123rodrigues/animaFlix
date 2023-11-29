const database = require('../services/database');

const Filme = require('../models/filme');
const filmesJSON = require('../data/filme.json');

const addFilmes = async () => {
    try{
        for(let filme of filmesJSON){
            console.log(`inserindo${filme.titulo}`);
            await new Filme(filme).save();
        }
        }catch (err){
            console.log(err.message);
    }
}

addFilmes();