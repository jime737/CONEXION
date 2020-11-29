const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'b1lrd0uahrr7bgm7hs6f-mysql.services.clever-cloud.com',
  user: 'uuleomezx4sxnkar',
  password: 'G4oBfOvMWvFxreT4Hx8o',
  database: 'b1lrd0uahrr7bgm7hs6f',
  multipleStatements: true

    // host:'bz6uvndcnhfr7mavr9f2-mysql.services.clever-cloud.com',
  // user:'ueeuwupkuykeozg6',
  // password:'xOSqBorgS9GXqXcO0gdp',
  // database:'bz6uvndcnhfr7mavr9f2',
  // multipleStatements: true
});
mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});

module.exports = mysqlConnection;