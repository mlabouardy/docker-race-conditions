var MySQL = require('mysql');

var connection = MySQL.createConnection({
  host : process.env.MYSQL_HOST || 'localhost',
  user : process.env.MYSQL_USER || '',
  password  : process.env.MYSQL_PASSWORD || ''
});

connection.connect(function(err){
  if(err){
    console.log('error connecting:', err.stack);
    return;
  }
  console.log('connected as id:', connection.threadId);
})

while(1){
  console.log('Waiting for works .....');
  sleep(5);
}
