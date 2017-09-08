$(document).ready(function() {
  var thermostat = new Thermostat();
  updatetemp();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  });

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
