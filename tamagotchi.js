console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(foodInTummy, restedness, health, name, creatureType) {
        this.foodInTummy = 10
        this.restedness = 10
        this.health = 10
        this.name = name
        this.creatureType = creatureType
    }

    cry() {
        this.foodInTummy--
        console.log('WAHH!!!!' + ' ' + `...${this.name} cries.`)
        console.log('Current food: ' + this.foodInTummy)
    }

    puke() {
        this.foodInTummy--
        console.log('WAHH!!!!' + ' ' + `...${this.name} cries after puking.`)
        console.log('Current food: ' + this.foodInTummy)
    }

    yawn() {
        this.restedness--
        console.log(`${this.name}'s current restedness is: ` + this.restedness)
    }

    hungerTimer() {
        setInterval(this.cry, 6000)
    }

    yawnTimer() {
        setInterval(this.yawn, 10000)
    }

    sickTimer() {
        setInterval(this.puke, 20000)
    }
}


//create new Tamagotchis
const tamaObjOne = new Tamagotchi(10, 10, 10, 'loli', 'ferret')
const tamaObjTwo = new Tamagotchi(10, 10, 10, 'peopi', 'bunny')
const tamaObjThree = new Tamagotchi(10, 10, 10, 'jewn', 'bug')
const tamaObjFour = new Tamagotchi(10, 10, 10, 'flap', 'bird')


//test out your Tamagotchies below via console.logs

// console.log(`${tamaObjOne.name}`, tamaObjOne)
// console.log(`${tamaObjTwo.name}`, tamaObjTwo)
// console.log(`${tamaObjThree.name}`, tamaObjThree)
// console.log(`${tamaObjFour.name}`, tamaObjFour)

// console.log(`${tamaObjOne.name}`, tamaObjOne.cry())
// console.log(`${tamaObjTwo.name}`, tamaObjTwo.cry())
// console.log(`${tamaObjThree.name}`, tamaObjThree.cry())
// console.log(`${tamaObjFour.name}`, tamaObjFour.cry())

tamaObjFour.hungerTimer()
tamaObjFour.yawnTimer()
tamaObjFour.sickTimer()