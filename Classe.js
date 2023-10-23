class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const mago = new Hero("Magro", 35, "mago");
const guerreiro = new Hero("Guerre", 28, "guerreiro");
const monge = new Hero("Mongue", 40, "monge");
const ninja = new Hero("Ninga", 30, "ninja");


mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
