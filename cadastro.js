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

document.addEventListener('click', (e) => {
    if (event.target && event.target.nodeName === 'BUTTON') {
        const contemClasse = event.target.classList.contains('acessarFilme');
        if (contemClasse) {
            const url = e.target.dataset.url;
            window.open(url, '_blank');
        }
    }
    if (event.target && event.target.nodeName === 'BUTTON') {
        const contemClasse = event.target.classList.contains('excluirFilme');
        const response = confirm('Deseja excluir realmente excluir esse filme?');

        if (contemClasse) {
            if (response) {
                const id = e.target.dataset.id;
                document.getElementById(id).remove();
            }
        }

    }
})

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

    const id = new Date().getTime();
    const templateItem = `
    <tr id="${id}">
    <td>${dadosFilmes.titulo}</td>
    <td>${dadosFilmes.categoria}</td>
    <td>${dadosFilmes.ano}</td>
    <td class="text-right">
        <button class="btn btn-info acessarFilme"  data-url="${dadosFilmes.link}">Acessar</button>
        <button class="btn btn-danger excluirFilme" data-id="${id}">Excluir</button>
    </td>
    </tr>
`
    return templateItem;
}
const cadastrar = () => {
    if (
        dadosFilmes.titulo == '' ||
        dadosFilmes.link == ''||
        dadosFilmes.categoria == ''||
        dadosFilmes.ano == 0) { alert("preencha todos os campos") }
    else {
        document.getElementById('lista-filmes').innerHTML += montaItem();
        dadosFilmes = {};
    }
}