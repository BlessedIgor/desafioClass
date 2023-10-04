class standardHero{
    constructor(nameHeroi, attackHeroi){
        this.nameHeroi = nameHeroi
        this.attackHeroi = attackHeroi
    }
    
    attack (){
        console.log(`O ${this.nameHeroi} atacou usando ${this.attackHeroi}.`)
    }
}
let executeMago = new standardHero("Mago", "usou magia")

let executeGuerreiro = new standardHero("Guerreiro", "usou espada")

let executeMonge = new standardHero("Monge", "usou artes marciais")

let executeNinja = new standardHero("Ninja", "usou shuriken")

executeMago.attack()
console.log(" ")
executeGuerreiro.attack()
console.log(" ")
executeMonge.attack()
console.log(" ")
executeNinja.attack()
console.log(" ")
