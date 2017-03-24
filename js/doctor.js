var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.search = function(ailment, location, gender, doctorDisplay){
  if(gender === "No Preference"){
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&location=' + location + '&limit=10&user_key=' + apiKey).then(function(response){
      console.log(response);
      for(var x = 0; x <= 4; x++){
        var image = response.data[x].profile.image_url;
        var name = response.data[x].profile.first_name + " " + response.data[x].profile.last_name + " " +
         response.data[x].profile.title;
        var gender = response.data[x].profile.gender;
        var liscensed = response.data[x].licenses[0].state;
        var specialty = response.data[x].specialties[0].description;
        var bio = response.data[0].profile.bio;
        doctorDisplay(image, name, gender, liscensed, specialty, bio);
      }
    }).fail(function(error){
      console.log("Whoops it looks like something went wrong! It may be that your search result were less than 5");
    });
  } else {
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&location=' + location + '&gender=' + gender + '&limit=10&user_key=' + apiKey).then(function(response){
      console.log(response);
      for(var x = 0; x <= 4; x++){
        var image = response.data[x].profile.image_url;
        var name = response.data[x].profile.first_name + " " + response.data[x].profile.last_name + " " +
        response.data[x].profile.title;
        var gender = response.data[x].profile.gender;
        var liscensed = response.data[x].licenses[0].state;
        var specialty = response.data[x].specialties[0].description;
        var bio = response.data[0].profile.bio;
        doctorDisplay(image, name, gender, liscensed, specialty, bio);
      }
    }).fail(function(error){
      console.log("Whoops it looks like something went wrong! It may be that your search result were less than 5");
    });
  }
};

exports.doctorModule = Doctor;
