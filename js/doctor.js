var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.search = function(ailment, specialty, location, gender){
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&location=' + location + '&gender=' + gender + '&limit=10&user_key=' + apiKey).then(function(response){
    console.log(response);
    $('#results').append('<li>' + 'these are the doctors we found within your search' + "</li>");
  });
};

exports.doctorModule = Doctor;



// search conditions
// ailment
// specialty
// location
// gender
