//This keyword refers to the object in question and it can be use to get properties of an object
let restaurant = {
  name: "TWENTEK",
  guesCapacity: 120,
  guesCount: 0,
  checkAvailability: function (partySize) {
    let seatLeft = this.guesCapacity - this.guesCount;
    //We want to check if seat is available or not so we will return a boolean value
    return partySize <= seatLeft;
  },

  seatParty: function (partySize) {
    this.guesCount = this.guesCount + partySize;
  },
  removeParty: function (partySize) {
    this.guesCount = this.guesCount - partySize;
  }
};

// let status = restaurant.checkAvailability(6);
// console.log(status);

restaurant.seatParty(67);
console.log(restaurant.checkAvailability(5));
restaurant.removeParty(20);
console.log(restaurant.checkAvailability(4));