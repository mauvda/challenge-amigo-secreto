let cadastroNomes = [];

function adicionarAmigo() {
    let padrao = /[^a-zà-ú]/gi;
    let validaCampo = document.querySelector('input').value;
    validaCampo != '' && !validaCampo.match(padrao) ? 
    cadastroNomes.push(validaCampo) : 
    alert('Adicione um nome valido');
    document.querySelector('input').value = '';
    document.querySelector('input').placeholder = 'Digite um nome';
    console.log(cadastroNomes);
}

function sortearAmigo() {
    let amigoSorteado = Math.floor(Math.random() * cadastroNomes.length);
    cadastroNomes.length > 1 ? 
    document.getElementById('resultado').innerHTML = cadastroNomes[amigoSorteado] : 
    alert("Antes do sorteio, adicione dois ou mais nomes");
    
}