
// Construct the catalog query string
// const endpoint = 'http://data.ct.gov/resource/9k2y-kqxn.json?organization_type=Public%20School%20Districts&$$app_token=CGxaHQoQlgQSev4zyUh5aR5J3';
const endpoint = 'https://data.sfgov.org/resource/wwmu-gmzc.json';

var data = [];
var viewModel;


get(endpoint).then(function(response) {
    // console.log('Success!', response);
    console.log('Success!');

    data = JSON.parse(response);
    // console.log(data);

    viewModel = new ViewModel();
    ko.applyBindings(viewModel);

    // data.forEach(entry => {
    //     console.log(entry);
    // });

}, function(error){
    console.error("Failed!", error);
});

// //http://api.themoviedb.org/3/search/movie?api_key=APIKEY&query=MOVIENAME
// get('https://api.themoviedb.org/3/search/movie?api_key=9c8b8a24a248fed2e25eb1f8d2f29d13&language=en-US&query=180&page=1&include_adult=false&year=2011').then(function(response) {
//     console.log('Success!', response);
// });


// get(sf_endpoint).then(function(response) {
//     console.log('Success!', response);
//     // console.log('Success!');

//     // data = JSON.parse(response);
//     // // console.log(data);
//     // data.forEach(entry => {
//     //     console.log(entry.locations);
//     //     // codeAddress(entry.locations);
//     //     if (entry.locations === undefined) {
//     //         // these statements execute
//     //     } else {
//     //         codeAddress(entry.locations);
//     //     }
//     // });

// }, function(error){
//     console.error("Failed!", error);
// });


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var codeAddress = function(address) {
    // var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status === 'OK') {
        // map.setCenter(results[0].geometry.location);
        // var marker = new google.maps.Marker({
        //     map: map,
        //     position: results[0].geometry.location
        // });
        console.log(results[0].geometry.location);
      } else {
        // alert('Geocode was not successful for the following reason: ' + status);
        console.error('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

var Place = function(data) {
    var self = this;
    // console.log('creating Place for ', data);
    this.lat = ko.observable(data.location_1.latitude);
    this.lng = ko.observable(data.location_1.longitude);
    this.address = ko.observable(data.location_1.human_address);
    var coords = new google.maps.LatLng(this.lat(), this.lng());
    var marker = new google.maps.Marker({
        position: coords,
        map: map
    });
    this.marker = ko.observable(marker);
    google.maps.event.addListener(marker, 'click', function(){
        viewModel.markerClicked(self);
    });

    var content = '<div id="content">' +
            '<div id="siteNotice">' + '</div>' +
            '<h1 id="heading" class="heading">' + data.name + '</h1>' +
            '</div>';

    // var content = data.name;

    this.contentString = ko.observable(content);

};

var Location = function(data) {
    var self = this;

    console.log(data);
    this.actor_1 = data.actor_1;
    this.actor_2 = data.actor_2;
    this.actor_3 = data.actor_3;
    this.director = data.director;
    this.distributor = data.distributor;
    this.locations = data.locations;
    this.production_company = data.production_company;
    this.release_year = data.release_year;
    this.title = data.title;
    this.writer = data.writer;

    this.geocodeAddress = function() {
        geocoder.geocode(
            {'address': data.locations},
            function(results, status){
                if (status === 'OK') {
                    console.log(data);
                    console.log(results.length);
                    results.forEach(result => {
                        console.log(result.formatted_address);
                    });
                    console.log(results[0].geometry.location);
                    console.log(results[0].formatted_address);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });
                    self.marker = ko.observable(marker);
                    google.maps.event.addListener(marker, 'click', function(){
                        viewModel.markerClicked(self);
                    });

                    // Generate the content string
                    var content =   '<div id="content">' +
                                        '<div id="siteNotice">' + '</div>' +
                                        '<h1 id="heading" class="heading">' + data.title  + '</h1>' +
                                    '</div>';

                    self.contentString = ko.observable(content);

                } else {
                    console.error('Geocode was not successful for the following reason: ' + status);
                }

            });
    };


};

var ViewModel = function() {
    // store the outer 'this' which represents the ViewModel
    var self = this;

    this.locations = ko.observableArray([]);
    // console.log(data);

    // Create a new Location object for each item in the array.
    data.forEach(function(location){
        self.locations.push( new Location(location) );
    });

    // handles a click on a map marker
    this.markerClicked = function(location) {
        console.log(location);

        var marker = location.marker();
        console.log(marker);

        // toggle the info window
        infowindow = new google.maps.InfoWindow({
            content: location.contentString()
        });
        infowindow.open(map, marker);

        // toggle the bounce animation
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    };
};


function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status === 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

