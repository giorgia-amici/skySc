const moment = require('moment');

function Legs(data, carriers, places) {
  this.legs = {};
  this.getIDs(data, carriers, places);
}

function Leg(leg, carriers, originPlace, destinationPlace) {
  var timeDetails = this.processTimes(leg.Departure, leg.Arrival);

  this.id           = leg.Id;
  this.origin       = originPlace;
  this.destination  = destinationPlace;
  this.departure    = timeDetails.departure;
  this.arrival      = timeDetails.arrival;
  this.dayOffset    = timeDetails.dayOffset;
  this.stop         = leg.Stops.length;
  this.isDirect     = (leg.Stops.length === 0);
  this.duration     = this.minutesToHumanTime(leg.Duration);
  this.carriers     = carriers;
}
Leg.prototype.minutesToHumanTime = function (duration) {
  return moment.utc(
    moment.duration(duration, "minutes").asMilliseconds()
  ).format("h[h] mm");
}
Leg.prototype.processTimes = function (departure, arrival) {
  var depMoment = moment(departure);
  var arrMoment = moment(arrival);
  return {
    departure: depMoment.format("hh:mm"),
    arrival: arrMoment.format("hh:mm"),
    dayOffset: arrMoment.diff(depMoment, 'days')
  }
}

Legs.prototype.getIDs = function(legsArray, carriers, places) {
  if (legsArray.length) {
    for(var i=0; i<legsArray.length; i++) {
      var originPlace = places.getById(legsArray[i].OriginStation);
      var destinationPlace = places.getById(legsArray[i].DestinationStation);
      var carriersIDs = legsArray[i].Carriers;
      var carrierList = [];
      for(var j=0; j<carriersIDs.length; j++){
        carrierList.push(carriers.getById(carriersIDs[j]));
      }
      var leg = new Leg(legsArray[i], carrierList, originPlace, destinationPlace);
      this.legs[leg.id] = leg;
    }
  }
}
Legs.prototype.getById = function(id) {
  return this.legs[id];
}
module.exports = Legs;
