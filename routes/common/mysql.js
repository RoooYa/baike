var mysql = require("mysql");

var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'baike',
	port: 3306
});

module.exports = function(sql, v, callback) {
	pool.getConnection(function(err, conn) {
		if (err) {
			callback(err, null, null);
		} else {

			if (typeof v == 'function') {
				callback = v;
				v = undefined;
			}
			conn.query(sql, v, function(qerr, vals, fields) {
				//释放连接  
				conn.release();
				//事件驱动回调  
				callback(qerr, vals, fields);
			})
		}
	})
}