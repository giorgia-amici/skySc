function Agents(data) {
  this.agents = {};
  this.getIDs(data);
}

function Agent(agent) {
  this.id   = agent.Id;
  this.name = agent.Name;
}

Agents.prototype.getIDs = function(agentsArray){
  if(agentsArray.length) {
    for(var i=0; i<agentsArray.length; i++) {
      var agent = new Agent(agentsArray[i]);
      this.agents[agent.id] = agent;
    }
  }
}

Agents.prototype.getById = function(id) {
  return this.agents[id];
}
module.exports = Agents;
