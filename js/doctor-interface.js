var Doctor = require('./../js/doctor.js').doctorModule;

var doctorDisplay = function(image, name, gender, liscensed, specialty, bio){
  $('#results').append("<li>" + name + '<br><img src="' + image + '"> <br>'+ "</li>");
};

$(document).ready(function(){
  var newDoctor = new Doctor();

  $('#search-form').submit(function(event){
    event.preventDefault();
    var ailmentInput = $('#ailment').val();
    var locationInput = $('#location').val();
    var genderInput = $('#gender').val();
    newDoctor.search(ailmentInput, locationInput, genderInput, doctorDisplay);
  });

});
