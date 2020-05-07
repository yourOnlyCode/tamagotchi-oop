console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(foodInTummy, restedness, health) {
        this.foodInTummy = 10
        this.restedness = 10
        this.health = 10
    }

    cry() {
        this.foodInTummy--
        console.log('WAHH!!!!' + ' ' + `...${Tamagotchi} cries.`)
        console.log('Current food: ' + this.foodInTummy)
    }
}


//create new Tamagotchis
const loli = new Tamagotchi()
const peopi = new Tamagotchi()


//test out your Tamagotchies below via console.logs

console.log('loli:', loli)
console.log('peopi:', peopi)