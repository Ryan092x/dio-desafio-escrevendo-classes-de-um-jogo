// Desafio de projeto 03
// Dev: Ryan Victor
// Data: 15/11/2023

// Definindo a classe Heroi
class Heroi {

    // Construtor para inicializar as propriedades do herói
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Função para realizar o ataque com base no tipo do herói
    atacar(){
        if(this.tipo === "Guerreiro"){
            console.log(`O ${this.tipo} ${this.nome} atacou usando espada`);
        } 
        else if(this.tipo === "Mago"){
            console.log(`O ${this.tipo} ${this.nome} atacou usando magia`);
        } 
        else if(this.tipo === "Monge"){
            console.log(`O ${this.tipo} ${this.nome} atacou usando artes marciais`);
        } 
        else if(this.tipo === "Ninja"){
            console.log(`O ${this.tipo} ${this.nome} atacou usando shuriken`);
        }
    }
}

// Criando uma instância da classe Heroi
let meuHeroi = new Heroi("King", "20", "Guerreiro");

// Saída
meuHeroi.atacar();