$(document).ready(function() {
  var thermostat = new Thermostat();
  updatetemp();

  $('#temperature-up').on('click', function() {
    thermostat.up();
    updatetemp();
  });

  $('#temperature-down').on('click', function() {
    thermostat.down();
    updatetemp();
  });

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updatetemp();
  });

  $('#powersaving-on').on('click', function() {
    thermostat.powersave = true;
    updatetemp();
  });

  $('#powersaving-off').on('click', function() {
    thermostat.powersave = false;
    updatetemp();
  });

  function updatetemp() {
  $('#temperature').text(thermostat.temperature);
  if(thermostat.check() === 'low-usage') {
   $('#temperature').css('color', 'green')
  }
  else if(thermostat.check() === 'medium-usage') {
   $('#temperature').css('color', 'black')
  }
  else {
   $('#temperature').css('color', 'red')
   }
 };
});
