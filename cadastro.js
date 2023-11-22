const botao = document.getElementById("botao");

let dadosFilmes = {
    titulo: '',
    link: '',
    categoria: '',
    ano: 0,
}

botao.addEventListener('click', (e) => {
    atualizarDados();
    cadastrar();
    
});

const atualizarDados = () => {
    dadosFilmes = {
        titulo: document.getElementById('titulo').value,
        link: document.getElementById('link').value,
        categoria: document.getElementById('categoria').value,
        ano: document.getElementById('ano').value
    }
    console.log(dadosFilmes)
    
}

const montaItem = () => {
    const item = document.createElement('tr');
    const id = new Date().getTime();
    const templateItem = `
    <td>${dadosFilmes.titulo}</td>
    <td>${dadosFilmes.categoria}</td>
    <td>${dadosFilmes.ano}</td>
    <td class="text-right">
        <button class="btn btn-info data-url="${dadosFilmes.link}">Acessar</button>
        <button class="btn btn-danger" data-id="${id}">Excluir</button>
    </td>
`
    item.innerHTML += templateItem;
    console.log(`${dadosFilmes.titulo}: ${id}`)
return item;
}
const cadastrar =()=>{
    document.getElementById('lista-filmes').appendChild(montaItem());
    dadosFilmes={};
}