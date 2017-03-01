
// Hard coded locations for San Andreas in the event the server is down.
const san_andreas = [
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","locations":"2nd St. at Townsend St.","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","locations":"Jefferson St. at Powell St.","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","fun_facts":"Characters walk down street and it's totally wrecked from a massive earthquake","locations":"Grant St. at Bush St.","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","locations":"Vallejo Garage Roof (Vallejo at Powell)","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","fun_facts":"3 characters walk down the street. An earthquake shakes the city and stuff starts breaking. One character gets a shard of glass stuck in his leg.","locations":"Clay St. at Taylor","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","locations":"Bay St. at Polk","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","locations":"Intersection of Lombard and Hyde","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","locations":"Mission between 3rd and 4th St.","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","fun_facts":"Characters walk out of broken window of 555 California out to Kearny St. Splinter unit films a car driving into the garage at 555 California","locations":"555 California","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","locations":"Broadway and Kearney","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","locations":"Grant between Bush and Market","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","locations":"Coit Tower","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","locations":"TransAmerica Pyramid (600 Montgomery Street)","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","locations":"Washington Square","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","locations":"Battery Spencer","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","fun_facts":"Bystanders watch as a tsunami crashes over them","locations":"Pier 43","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","fun_facts":"Characters watch from roof of garage as tsunami hits SF waterfront","locations":"Vallejo St. Garage, 766 Vallejo St.","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","locations":"Fort Baker","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","fun_facts":"3 characters run out of stadium, there is a group of people on the sidewalk, an earthquake hits, and they duck for cover","locations":"AT&T Stadium","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","fun_facts":"two paragliders land on the field of AT&T Park","locations":"AT&T Stadium","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","fun_facts":"Characters drive in a high speed picture boat to see different views of the city.","locations":"Water work in SF Bay","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","locations":"Stage Work, 47 Julian St.","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","fun_facts":"Characters walk to get a vantage point for Coit tower. 250 actors walking \"fleeing\" the city after earthquake","locations":"Hyde St. at Greenwich and Hyde St. at Lombard","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "},
{"actor_1":"Dwayne Johnson","director":"Brad Peyton","distributor":"Warner Bros.","fun_facts":"Characters look for a form of communication with LA in a post-quake trashed city","locations":"Asia Star Fantasy, 1126 Grant Ave.","production_company":"Upside Down Productions, Inc.","release_year":"2015","title":"San Andreas","writer":"Allan Loeb "}
];

// Endpoint for SF OpenData
const endpoint = 'https://data.sfgov.org/resource/wwmu-gmzc.json';

var titles = [];
var viewModel;


get(endpoint).then(function(response) {
    // console.log('Success!', response);
    console.log('Success!');

    const data = JSON.parse(response);
    // console.log(data);

    const grouped = groupByTitle(data);
    console.log(grouped);

    // sort the array by title
    titles = grouped.sort(function(previous, next){
       return previous.title > next.title ? 1 : -1;
    });

    viewModel = new ViewModel();
    ko.applyBindings(viewModel);

}, function(error){
    // If the endpoint fails for some reason, load the San Andreas data.
    console.error("Failed!", error);

    titles = groupByTitle(san_andreas);

    viewModel = new ViewModel();
    ko.applyBindings(viewModel);
});


function groupByTitle(orig) {
    var newArr = [],
        titles = {},
        i, j, cur;

    for (i = 0, j = orig.length; i < j; i++) {
        cur = orig[i];
        if (!(cur.title in titles)) {
            titles[cur.title] = {title: cur.title, entries: []};
            newArr.push(titles[cur.title]);
        }
        titles[cur.title].entries.push(cur);
    }
    return newArr;
}



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

var Title = function(data) {
    var self = this;

    // console.log('creating Title for', data);
    this.title = data.title;
    this.entries = data.entries;

    // this.actor_1 = data.actor_1;
    // this.actor_2 = data.actor_2;
    // this.actor_3 = data.actor_3;
    // this.director = data.director;
    // this.distributor = data.distributor;
    // this.locations = data.locations;
    // this.production_company = data.production_company;
    // this.release_year = data.release_year;
    // this.writer = data.writer;

    this.showMarkers = function() {
        // show marker for each entry in the entries array
        this.entries.forEach(function(entry){
            console.log(entry.locations);
            if (entry.locations !== undefined) {
                const address = entry.locations + " San Francisco, CA";
                geocoder.geocode({ 'address': address }, function(results, status) {

                if (status === google.maps.GeocoderStatus.OK) {
                    console.log(results[0].formatted_address);

                    map.setCenter(results[0].geometry.location);
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
                                        '<h1 id="heading" class="heading">' + entry.locations  + '</h1>' +
                                    '</div>';

                    self.contentString = ko.observable(content);
                    } else {
                        console.error('Geocode was not successful for the following reason: ' + status);
                    }
                });
            } else {
                alert('No location data for that title!');
            }
        });
    };

};

var ViewModel = function() {
    // store the outer 'this' which represents the ViewModel
    var self = this;

    this.titles = ko.observableArray([]);
    console.log(titles);

    // Create a new Title object for each item in the titles array.
    titles.forEach(function(title){
        self.titles.push( new Title(title) );
    });

    // set the current title
    this.currentTitle = ko.observable( this.titles()[0] );

    this.titleClicked = function() {
        console.log('ViewModel: title clicked!');

        console.log(this);

        // update the current title
        self.currentTitle(this);
        this.showMarkers();
    };

    // handles a click on a map marker
    this.markerClicked = function(title) {
        console.log(title);

        var marker = title.marker();
        console.log(marker);

        // toggle the info window
        infowindow = new google.maps.InfoWindow({
            content: title.contentString()
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

