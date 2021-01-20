var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() {
  db.run("CREATE TABLE table1 (info TEXT, age smallint)");

  var stmt = db.prepare("INSERT INTO table1 VALUES (?,?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i, i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM table1", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});

db.close();