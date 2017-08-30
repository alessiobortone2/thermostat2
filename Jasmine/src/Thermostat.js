function Thermostat(temperature) {
  this.temperature = 20;
};

Thermostat.prototype.up = function(unit) {
  this.temperature += unit;
};

Thermostat.prototype.down = function(unit) {
  this.temperature -= unit;
};
