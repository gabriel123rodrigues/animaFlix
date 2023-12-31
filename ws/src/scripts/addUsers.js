const database = require('../services/database');

const Usuario = require('../models/usuario');
const usuariosJSON = require('../data/usuario.json');

const addUsers = async () => {
    try{
        for(let usuario of usuariosJSON){
            console.log(`inserindo${usuario.nome}`);
            await new Usuario(usuario).save();
        }
        }catch (err){
            console.log(err.message);
    }
}

addUsers();