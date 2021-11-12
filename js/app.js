function teste() {
    var sapatos = { cor: "marrom", marca: "Nike", tamanho: 42 }
    sapatos.tamanho = 47

    // console.log(sapatos.tamanho);
    delete sapatos.tamanho
        // console.log(sapatos.tamanho);
        // console.log(sapatos);

}

function pessoa(id, nome, ativo, idade) {
    this.id = id
    this.nome = nome
    this.ativo = ativo
    this.idade = idade
}

var p1 = new pessoa(1, "Diego, true, 45")
    // console.log(p1.nome);
    // console.log(p1.idade);


function Livro(isbn) {
    this.isbn = isbn
    this.getIsbn = function() {
        return "O Isbn é " + this.isbn
    }
}

var livro1 = new Livro("901-3865")
    // console.log(livro1.getIsbn());

var livro2 = new Livro("902-4789")
    // console.log(livro2.getIsbn());

// Array.concat ()
var listaMeninas = ["Silvia", "Maria", "Joana"]
var listaMeninos = ["João", "Paulo", "Pedro"]
var listaPessoas = listaMeninas.concat(listaMeninos)
    // console.log(listaPessoas);

var listaPessoas2 = listaMeninos.concat(listaMeninas)
    // console.log(listaPessoas2);


// Array.map ()
var listaNomes = ['Silvia', 'Carlos', 'João', 'Maria', 'Paulo', 'Pedro']
var nomesMaiuscula = listaNomes.map(nome => nome.toUpperCase())
    // console.log(nomesMaiuscula);

// Converter números para strings
n = 20;
// document.write("A variável n é do tipo " + typeof n + "<br />");

n = String(n)
    // document.write("A variável n agora é do tipo " + typeof n + "<br />")

// Convertendo valores lógicos para strings
b = true
    // document.write("A variável b é do tipo " + typeof b + "<br />")

b = String(b)
    // document.write("A variável b agora é do tipo " + typeof b + "<br />")

// Convertendo uma string em número
a = "10"
b = "23.6"

// document.write("A variável a é do tipo " + typeof a + "<br />")
// document.write("A variável b é do tipo " + typeof b + "<br />")

a = Number(a)
b = Number(b)

// document.write("A variável a é do tipo " + typeof a + "<br />")
// document.write("A variável b é do tipo " + typeof b + "<br />")


// Convertendo string para número inteiro
a = "10"
document.write("A variável a é do tipo " + typeof a + "<br />")
a = parseInt(a)
document.write("A variável a agora é do tipo " + typeof a + "<br />")
document.write("Valor de a: " + a + "<br />")