function Thermostat(temperature = 20) {
  this.temperature = temperature;
  this.powersave = true;
  this.MIN_TEMP = 10;
};

Thermostat.prototype.up = function() {
  if(this.powersave === false && (this.temperature) >= 32) {
  throw "You wasteful anti-environmental you";
  }
  else if(this.powersave && (this.temperature) >= 25) {
  throw "Powersave mode is on, can't go above 25";
  }
  else {
    this.temperature += 1;
  };
};

Thermostat.prototype.down = function() {
  if(this.temperature <= this.MIN_TEMP){
  throw "Can't go belove 10 degrees";
}
else {
  this.temperature -= 1;
}
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.check = function() {
  if (this.temperature < 18) {
      return 'low-usage';
    }
    if (this.temperature >= 18 && this.temperature <= 25) {
      return 'medium-usage';
    }
    return 'high-usage';
  };

//   switch(this.temperature) {
//     case this.temperature <18:
//         this.usage = 'low-usage';
//         break;
//     case this.temperature < 25:
//         this.usage = 'medium-usage'
//         break;
//     default:
//         this.usage = 'high-usage'
// }
