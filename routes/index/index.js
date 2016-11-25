var mysql = require('../common/mysql');

module.exports = function(app) {

	app.get('/', function(req, res) {
		mysql("SELECT happy.id,happy.dataTime FROM happy", function(err, vals, fields) {
			res.json(vals);
		});
	})
}