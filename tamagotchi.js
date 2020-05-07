console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(foodInTummy, restedness, health) {
        this.foodInTummy = 10
        this.restedness = 10
        this.health = 10
    }

    cry () {
        this.foodInTummy -= 1
        console.log('WAHH!!!!')
    }
}


//create new Tamagotchis
const loli = new Tamagotchi()

const peopi = new Tamagotchi()


//test out your Tamagotchies below via console.logs
