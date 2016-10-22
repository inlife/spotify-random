const request = require('request');

let qvariants = ['%25a%25', 'a%25', '%25e%25', 'e%25', '%25i%25', 'i%25', '%25o%25', 'o%25'];

let qvar = qvariants[ Math.floor( Math.random() * qvariants.length ) ];
let qoff = Math.ceil(Math.random() * 1000) + Math.ceil(Math.random() * 500);

let qurl = `https://api.spotify.com/v1/search?q=${qvar}&offset=${qoff}&limit=1&type=track`;

// debug
// console.log(qvar, qoff);

request(qurl, function(err, res, body) {
    if (err) return console.err(err);

    // parse response
    var res = JSON.parse(body);

    var artist = res.tracks.items[0].artists[0].name;
    var track  = res.tracks.items[0].name;

    console.log(`> ${artist} - ${track}`);
});
