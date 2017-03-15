function Itineraries(data, legs, agents) {
  this.itineraries = [];
  this.getIDs(data, legs, agents);
}

function Itinerary(inboundLeg, outboundLeg, itinerary, agent) {
  this.inBound      = inboundLeg;
  this.outBound     = outboundLeg;
  this.price        = Math.ceil(itinerary.PricingOptions[0].Price); //Assumimg first entry is cheaper
  this.agent        = agent;
}

Itineraries.prototype.getIDs = function(itinerariesArray, legs, agents) {
  if (itinerariesArray.length) {
    for(var i=0; i<itinerariesArray.length; i++) {
      var inboundLeg  = legs.getById(itinerariesArray[i].InboundLegId);
      var outboundLeg = legs.getById(itinerariesArray[i].OutboundLegId);
      var agent       = agents.getById(itinerariesArray[i].PricingOptions[0].Agents[0]); //Always appears to have 1 item and designs do not handle more
      var itinerary   = new Itinerary(inboundLeg, outboundLeg, itinerariesArray[i], agent);
      this.itineraries.push(itinerary);
    }
  }
}
Itineraries.prototype.getItineraries = function() {
  return this.itineraries;
}
module.exports = Itineraries;
