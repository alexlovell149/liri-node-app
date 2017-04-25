# liri-node-app

=============================================================

Welcome to the liri-node-app!

The goal of this app was to build a command line project using node.js and several APIs that allow the user to 
put a command in terminal and generate several answers.

==============================================================

Twitter

The first command involves linking my twitter tokens from a dummy account in my keys.js folder and exporting them to the
liri.js folder. So when the user types "my-tweets" they will get all of my tweets and the timestamp of when it
was created along with any Retweet I had gotten

==============================================================

Also used switch-case scenario to allow node.js to switch through several arguments and APIs to get different results.
So if I type my-tweets or spotify-this-song it does not get confused with the order in the array of process.argv

==============================================================

Spotify

Referncing the spotify documentation to take the API and put in a track name and get multiple results and artists, albums, and URL linking to them within Spotify. So when you type "spotify-this-song" and then "Voodoo-Child" it should give you anything related to that track preferably Jimi Hendrix as the first result

==============================================================

OMDB

Omdb is a movie list api that allows us to pull ratings, plots, cast, title , country of orgin, and many other lists simply from finding a movie title. So when you type "movie-this" and then "Forrest-Gump" it should give you the cast, rotten tomatoes URL, year created, IMDB rating, country made in, and the plot.

==============================================================

Request & fs

I created a random.txt file that has the command spotify-this-song and the Backstreet Boys hit I want it that way. So when you make a command "do-what-it-says" it will automatically look for that song in spotify. I used fs.readFile to read the random.txt file and data.split to split the txt file into an array that my command line will auto read. 






















