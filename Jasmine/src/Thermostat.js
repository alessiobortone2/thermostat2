function Thermostat(temperature) {
  this.temperature = 20;
  this.MIN_TEMP = 10
};

Thermostat.prototype.up = function(unit) {
  this.temperature += unit;
};

Thermostat.prototype.down = function(unit) {
  this.temperature -= unit;
};
