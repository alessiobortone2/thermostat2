describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat(20);
  });


  it('should default to 20 degrees', function() {
    expect(thermostat.temperature).toBe(20)
  });

  it('should increase with an up function', function() {
    thermostat.up(1);
    expect(thermostat.temperature).toBe(21)
  });

  it('should decrease with a down function', function() {
    thermostat.down(1);
    expect(thermostat.temperature).toBe(19)
  });

  it('min temperature is 10 degrees', function() {
    expect(thermostat.MIN_TEMP).toBe(10)
  });
  //
  it('in power saving mode max temp is 25', function() {
    for (i = 1; i < 6; i++) {thermostat.up()}
    expect(function() {thermostat.up()}).toThrow("Powersave mode is on, can't go above 25");
  });

  it('power saving mode is off then max temp is 32', function() {
    thermostat.powersave = false;
    for (i = 1; i < 13; i++) {thermostat.up()}
    expect(function() {thermostat.up()}).toThrow("You wasteful anti-environmental you")
  });

  it('power saving mode is off and we remain below 32 degrees', function() {
      thermostat.reset();
      thermostat.powersave = false;
      for (i = 1; i < 8; i++) {thermostat.up()}
      expect(thermostat.temperature).toBe(27)
  });

  it('resets the temperature to 20 degrees', function() {
    thermostat.reset();
    expect(thermostat.temperature).toBe(20)
  });

  it('checks the usage of the thermostat', function() {
    thermostat.reset();
    thermostat.powersave = false;
    for (i = 1; i < 7; i++) {thermostat.up()}
    expect(thermostat.check()).toBe('high-usage')
  });
});
