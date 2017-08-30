describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat(20);
  });


  it('should default to 20 degrees', function () {
    expect(thermostat.temperature).toBe(20);
  });


});
