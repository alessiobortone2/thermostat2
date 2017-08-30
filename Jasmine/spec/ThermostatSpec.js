describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat(20);
  });


  it('should default to 20 degrees', function() {
    expect(thermostat.temperature).toBe(20);
  });

  it('should increase with an up function', function() {
      thermostat.up(1);
      expect(thermostat.temperature).toBe(21);
  });

  it('should decrease with a down function', function() {
      thermostat.down(1);
      expect(thermostat.temperature).toBe(19);
  });

  it('min temperature is 10 degrees', function() {
    expect(thermostat.MIN_TEMP).toBe(10)
  });

  it('in power saving mode max temp is 25', function() {
    expect( function() {thermostat.up(8)}).toThrow("Powersave mode is on, can't go above 25");
  });
});
