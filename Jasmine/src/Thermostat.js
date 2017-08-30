function Thermostat(temperature) {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.powersave = true;
};

Thermostat.prototype.up = function(unit) {
  if(this.powersave && (this.temperature + unit) > 25) {
   throw "Powersave mode is on, can't go above 25";
 }
  else
   {
     this.temperature += unit;
   }
};

Thermostat.prototype.down = function(unit) {
  this.temperature -= unit;
};
