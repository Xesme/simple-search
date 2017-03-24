var Doctor = require('./../js/doctor.js').doctorModule;

var doctorDisplay = function(image, name, gender, liscensed, specialty, bio){
  $('#results').append("<div class='well'><li>" + '<img src="' + image + '"> <br><hr>'+ name + "<br><hr>Liscensed in: " + liscensed + "<br><hr>" + specialty + "<br><hr>Biography" + bio + "</li>");
};

$(document).ready(function(){
  var newDoctor = new Doctor();

  $('#search-form').submit(function(event){
    event.preventDefault();
    var ailmentInput = $('#ailment').val();
    var locationInput = $('#location').val();
    var genderInput = $('#gender').val();
    newDoctor.search(ailmentInput, locationInput, genderInput, doctorDisplay);
    $('#clear').show();
    $('#search-form').hide();
  });

  $("#clear").click(function(){
    $("#results").empty();
    $("#clear").hide();
    $('#search-form').show();
  });
});
