describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat(20);
  });


  it('should default to 20 degrees', function () {
    expect(thermostat.temperature).toBe(20);
  });


  it('should increase with an up function', function () {
      thermostat.up(1);
      expect(thermostat.temperature}).toBe(21);
    });


});
