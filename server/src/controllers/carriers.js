function Carriers(data) {
  this.carriers = {};
  this.getIDs(data);
}

function Carrier(carrier) {
  // extract filename, displaycode for easyjet==EZY, correct image name for easyjet==EZ
  var fileName      = carrier.ImageUrl.split('/').pop();

  this.id           = carrier.Id;
  this.faviconImage = "https://logos.skyscnr.com/images/airlines/favicon/" + fileName;
}

Carriers.prototype.getIDs = function(carriersArray){
  if(carriersArray.length) {
    for(var i=0; i<carriersArray.length; i++) {
      var carrier = new Carrier(carriersArray[i]);
      this.carriers[carrier.id] = carrier;
    }
  }
}

Carriers.prototype.getById = function(id) {
  return this.carriers[id];
}
module.exports = Carriers;
