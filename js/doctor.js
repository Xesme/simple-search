var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.search = function(ailment, specialty, location, gender){
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&location=' + location + '&gender=' + gender + '&limit=10&user_key=' + apiKey).then(function(response){
    console.log(response);
    for(var x = 0; x <= 4; x++){
      console.log(response.data[x].profile.first_name );
    }
    // $('#results').append('<li>' + '<img sr="' + response.data[0].profile.img_url + '"/><br>' + 'name: ' + response.data[0].profile.first_name + " " +
    // response.data[0].profile.last_name +  response.data[0].profile.title + "<br>" +
    // "gender: " + response.data[0].profile.gender +  "<br>licensed in the state of : " + response.data[0].licenses[0].state + "<br>" + "specialties: " + response.data[0].specialties[0].description +  "<br> biography: " + response.data[0].profile.bio + "</li>");
  });
};

exports.doctorModule = Doctor;
