import mysql from 'mysql';

var connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'movies'
});
connection.connect();

// function fetchAll() {
//   const queryString = 'select * from groceries';
//   dBconnect.query(queryString, function(err, result) {
//     if (err) { console.log(' error in fetching movie list')}
//     return result;
//   });
// }

// function fetchAll() {
//   const queryString = 'select * from groceries';
//   dBconnect.query(queryString, (err, result) => {
//     if (err) { console.log(' error in fetching movie list')}
//     return result;
//   });
// }

// module.exports = {
//   fetchAll
// };