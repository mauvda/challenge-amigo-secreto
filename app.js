let cadastroNomes = [];

function adicionarAmigo() {
    let padrao = /[^a-zà-ú]/gi;
    let validaCampo = document.querySelector('input').value;
    validaCampo != '' && !validaCampo.match(padrao) ? 
    cadastroNomes.push(validaCampo) : 
    alert('Adicione um nome valido');
    for (let i = 0; i < cadastroNomes.length; i++) {
        document.querySelector('li').remove();
        listaAmigos();
    }
    document.querySelector('input').value = '';
    document.querySelector('input').placeholder = 'Digite um nome';
    console.log(cadastroNomes);
}

function listaAmigos() {
    let listaHtml = document.createElement('li');
    listaHtml.appendChild(document.createTextNode(document.querySelector('input').value));
    document.querySelector('ul').appendChild(listaHtml);
    
}

function sortearAmigo() {
    let amigoSorteado = Math.floor(Math.random() * cadastroNomes.length);
    cadastroNomes.length > 1 ? 
    document.getElementById('resultado').innerHTML = cadastroNomes[amigoSorteado] : 
    alert("Antes do sorteio, adicione dois ou mais nomes");
    
}