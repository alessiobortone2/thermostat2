function Thermostat(temperature = 20) {
  this.temperature = temperature;
  this.MIN_TEMP = 10;
  this.powersave = true;
};

Thermostat.prototype.up = function(unit) {
  if(this.powersave && (this.temperature + unit) > 25) {
   throw "Powersave mode is on, can't go above 25";
   console.log(this.powersave);
   console.log(this.temperature);
  }
   else if(this.powersafe === false && (this.temperature + unit) > 32) {
    throw "You wasteful anti-environmental you";
    console.log(this.powersave);
    console.log(this.temperature);
  }
  else {
    this.temperature += unit;
    console.log(this.powersave);
    console.log(this.temperature);
  };
};

Thermostat.prototype.down = function(unit) {
  this.temperature -= unit;
};
