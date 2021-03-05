
const sound = 'pepe'
const duck1 = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound) => console.log(sound)
}
const duck2 = {
    name: 'dewey',
    numLegs: 2,
    makeSound: (sound) => console.log(sound)
}

duck1.makeSound('PUTO')

export const ducks = [duck1, duck2];