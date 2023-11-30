import React from 'react';
import Filme from '../../components/Filme';

const Home = () => {

    const listaFilmes =[
        {nome: 'Filme 1', ano: 2020, categoria: 'terror'},
        {nome: 'Filme 2', ano: 2020, categoria: 'suspense'},
        {nome: 'Filme 3', ano: 2020, categoria: 'ação'},
        {nome: 'Filme 4', ano: 2020, categoria: 'terror'},
        {nome: 'Filme 5', ano: 2020, categoria: 'terror'},
        {nome: 'Filme 6', ano: 2020, categoria: 'terror'},
        {nome: 'Filme 6', ano: 2020, categoria: 'terror'},
        {nome: 'Filme 6', ano: 2020, categoria: 'terror'},
        {nome: 'Filme 6', ano: 2020, categoria: 'terror'},
        {nome: 'Filme 6', ano: 2020, categoria: 'terror'},
        {nome: 'Filme 6', ano: 2020, categoria: 'terror'},
        {nome: 'Filme 6', ano: 2020, categoria: 'terror'},
        {nome: 'Filme 6', ano: 2020, categoria: 'terror'},
        {nome: 'Filme 6', ano: 2020, categoria: 'terror'},
        {nome: 'Filme 6', ano: 2020, categoria: 'terror'},
        {nome: 'Filme 6', ano: 2020, categoria: 'terror'},
    ]

    return (
        <div className='container'>
            <h1>Lista Filmes</h1>
            <br/>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Ano</th>
                        <th scope="col" className='text-right'>Ações</th>
                      
                    </tr>
                </thead>
                <tbody>
                  {listaFilmes.map((filme)=>(
                    <Filme filme={filme} />
                  ))}
                </tbody>
            </table>
        </div>

    )
}
export default Home;