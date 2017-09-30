let driverId = 0
let passengerId = 0

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
  }
}

class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name
  }
}
