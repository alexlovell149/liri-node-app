var TwitterPackage = require('twitter');

var spotify = require('spotify');

var omdb = require("request");

var fs = require("fs");

// Grabs my Twitter keys from keys.js
var keys = require("./keys.js");

// Gets all of my Twitter keys from the file 
var client = new TwitterPackage(keys.twitterKeys);

var liriCommand = process.argv[2];
var searchTitle = process.argv[3];

switch (liriCommand) {
    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        myPlayList();
        break;

    case "movie-this":
        myMovie();
        break;

    case "do-what-it-says":
        randomPick();
        break;
}


// use documentation to find my Twitter handle and my tweeets
function myTweets() {

	// define my paramters according to twitter documentation
    var params = { q: "alexlovell149", count: 20 }

    // using .get and search to find tweets in my timesline with count of 20
    client.get('search/tweets', params, gotData);


    // loop through all the info and all I want are my tweets which is text and the timestamp which is created_at
    function gotData(error, data, response) {
        var tweets = data.statuses;
        for (var i = 0; i < tweets.length; i++) {
         
            console.log("Timestamp: " + tweets[i].created_at);
            console.log("Tweet: " + tweets[i].text);
        }
    }

}

function randomPick() {
    fs.readFile("random.txt", "utf8", function(error, data) {
         
        var dataArr = data.split(",");
        // We will then re-display the content as an array for later use.
       
        var randomTitle = dataArr[1];
        


    spotify.search({ type: 'track', query: randomTitle, limit: 5 }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        //Handle Data
        var albumTrack = data.tracks.items;

        for (i = 0; i < albumTrack.length; i++) {
            console.log("Artist: " + albumTrack[i].artists[0].name);
            console.log("Album Title: " + albumTrack[i].album.name);
            console.log("Spotify Link: " + albumTrack[i].external_urls.spotify);
            console.log("Track Title: " + albumTrack[i].name);
            // } else if (!data && !err){
            // myPlaylist('The Sign');
        }
    });

    });
}


function myPlayList() {
    if (!searchTitle) {
        searchTitle = 'The Sign';
        console.log(searchTitle);
    }

    spotify.search({ type: 'track', query: searchTitle, limit: 5 }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        //Handle Data
        var albumTrack = data.tracks.items;

        for (i = 0; i < albumTrack.length; i++) {
            console.log("Artist: " + albumTrack[i].artists[0].name);
            console.log("Album Title: " + albumTrack[i].album.name);
            console.log("Spotify Link: " + albumTrack[i].external_urls.spotify);
            console.log("Track Title: " + albumTrack[i].name);
            // } else if (!data && !err){
            // myPlaylist('The Sign');
        }
    });

}

//Function for using request to get OMDB movie information from movie object
// Move Title, Year of release, Rating, Country, Language, Plot, Actors, Rotten Tomato Rating, URL


	function myMovie() {
    if (!searchTitle) {
        searchTitle = 'Mr. Nobody';
    }
    // getting the omdb api url for searching along with what the user types and the json documentation
    var omdbUrl = "http://www.omdbapi.com/?t=" + searchTitle + "&y=&plot=short&r=json";
    var rotTomaUrl = "https://www.rottentomatoes.com/m/" + searchTitle;
    omdb(omdbUrl, function(error, response, body) {
        // If the request is successful
        if (!error && response.statusCode === 200) {
            // Parse the body of the site and recover just the following responses from omdb
            console.log("Movie Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Country Movie Was Produced: " + JSON.parse(body).Country);
            console.log("Movie Language: " + JSON.parse(body).Language);
            console.log("Movie Plot: " + JSON.parse(body).Plot);
            console.log("Movie Actor: " + JSON.parse(body).Actors);
            console.log("Rotten Tomatoes URL: " + rotTomaUrl);
        }
    });
}


