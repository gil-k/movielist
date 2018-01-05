const http = require('http');

var movieTitle = '';

var api_key = '06a4530000a0f10bbd79d66bc9d9decf';

var options = {
  "method": "GET",
  "hostname": "api.themoviedb.org",
  "port": null,
  "path": "/3/search/movie?query=Contact&include_adult=false&page=1&language=en-US&api_key=" + api_key,
  "headers": {}
};

var getMovieData = http.request(options, function (res) {
  console.log('in getMovieData');
  var chunks = [];
  console.log(movieTitle);
  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
  console.log('getMovieData completed');
});

// var req = http.request(options, function (res) {
//   var chunks = [];
//   console.log(movieTitle);
//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function () {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });
// });

// req.write("{}");
// req.end();

// export default getMovieData;

