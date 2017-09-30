let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }
}

class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
  }
  setPassenger(passenger){
    this.passengerId = passenger.id
  }
  trips(){
    return store.trips.filter(function(trip) {
      return trip.passengerId === this.passengerId
    })
  }
}

class Trip {
  constructor(driverId, passengerId){
    this.id = ++tripId
    this.driverId = driverId
    this.passengerId = passengerId

    store.trips.push(this)
  }
}
