const pessoas = [
    {name: "Fabiana Araujo", age: 33},
    {name: "Gabriel Gomes", age: 25},
    {name: "Fernando Henrique", age: 17},
    {name: "Ana Luiza", age: 2},
    {name: "Geralda do Nascimento", age: 93},
    {name: "Miguel Souza", age: 70},
    {name: "Antonio Miguel", age: 69},
]

let buscar = document.getElementById("buscar").addEventListener("click", funcao_buscar);
let retornar = document.getElementById("retornar").addEventListener("click", funcao_retornar_nomes);
let id = document.getElementById("adicionar_id").addEventListener("click", inserir_id);
let retornar_maiores_de_idade = document.getElementById("maior_de_idade").addEventListener("click", maior_de_idade);
let media = document.getElementById("idades").addEventListener("click", media_de_idade);

function funcao_buscar() {
    
    let nome = String(document.getElementById("nome").value);
    let encontrado = pessoas.find(elemento => elemento.name == nome);
    console.log(encontrado);

}
function funcao_retornar_nomes(){

    let nomes = pessoas.map(pessoa => pessoa.name);
    console.log(nomes);

}
function inserir_id(){

    let id = 0;
    for(const pessoa of pessoas) {
        pessoa.id = id;
        id++;
    }
    console.log(pessoas);

}
function maior_de_idade(){

    let pessoas_maior_de_idade = pessoas.map(pessoa => {if (pessoa.age >= 18) {
        return pessoa;
    }});
    console.log(pessoas_maior_de_idade);

}
function media_de_idade(){

    let idades = pessoas.map(pessoa => pessoa.age);
    let media = 0;
    for (let index = 0; index < idades.length; index++) {
        media += idades[index];
    }
    media = media/idades.length;
    console.log(media);

}
