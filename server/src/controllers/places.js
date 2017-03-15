function Places(data) {
  this.places = {};
  this.getIDs(data);
}

function Place(place) {
  this.id   = place.Id;
  this.code = place.Code;
}

Places.prototype.getIDs = function(placesArray){
  if(placesArray.length) {
    for(var i=0; i<placesArray.length; i++) {
      var place = new Place(placesArray[i]);
      this.places[place.id] = place;
    }
  }
}

Places.prototype.getById = function(id) {
  return this.places[id];
}
module.exports = Places;
