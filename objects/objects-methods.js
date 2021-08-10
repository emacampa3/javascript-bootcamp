// method = object, whose value is a function

// program that keeps track of how many seats the restaurant has available

let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount += partySize
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize
    }
}

restaurant.seatParty(70) // if we sit 70 people, do we have space for 10 more?
console.log(restaurant.checkAvailability(10)) // check availability for 10
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))