function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName
  }
}

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

const instructor1 = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!";
  }
}

const d = createAnimal("pig", "oink", "OINK!")

d.oink()

const s = createAnimal("fish", "blubblub", "BlubBlub!")

s.blubblub()

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}
