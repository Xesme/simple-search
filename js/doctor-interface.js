var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function(){
  var newDoctor = new Doctor();

  $('#search-form').submit(function(event){
    event.preventDefault();
    var ailmentInput = $('#ailment').val();
    var specialtyInput = $('#specialty').val();
    var locationInput = $('#location').val();
    var genderInput = $('#gender').val();
    newDoctor.search(ailmentInput, specialtyInput, locationInput, genderInput);
    console.log(newDoctor);
  });

});
