var http = require('http');
var url = require('url')
var qs = require('querystring');
var db = require('./lib/db');
var template = require('./lib/template');
const express = require('express');
// const session = require('express-session');
const bodyParser = require('body-parser');
// const FileStore = require('session-file-store')(session);


const app = express();
const port = 8080;

//  정적 파일 서비스 미들웨어를 설정하는 부분 (예, css)
app.use(express.static('public'));

app.get('/', function(req, res){
	db.query(`SELECT cr_eng, cr_building FROM classroom GROUP BY cr_building, cr_eng ORDER BY cr_building ASC;`, function(err, buildings){
		var title = 'TTT시간표';
		var building = template.list(buildings, 'null');
		var html = template.HTML(
			`${title}`, 
			`${building}`, 
			`<div><p>건물을 선택해주세요.</p></div>`, 
			template.cate()
		);
		res.send(html);
	});
});

app.get('/yd1', function(req, res){
	var title = '역동관(1관)';
	var cr_eng = 'yd1';
	db.query(`SELECT cr_eng, cr_building FROM classroom GROUP BY cr_building, cr_eng ORDER BY cr_building ASC;`, function(err1, buildings){
		if (err1) throw err1;
		var building = template.list(buildings, cr_eng);
		db.query(`SELECT * FROM week;`, function(err2, weeks){
			if (err2) throw err2;
			db.query(`SELECT * FROM classroom WHERE cr_eng = '${cr_eng}' ORDER BY cr_classroom ASC;`, function(err3, classrooms){
				if (err3) throw err3;
				db.query(`SELECT le.* FROM lesson as le JOIN classroom as cr ON le.l_building = cr.cr_building WHERE cr.cr_eng = '${cr_eng}' GROUP BY le.l_id;`, function(err4, lessons){
					if (err4) throw err4;
					db.query(`SELECT * FROM teach;`, function(err5, teachs){
						if (err5) throw err5;
						var table = template.tableex(weeks, classrooms, lessons, teachs);
						var html = template.HTML(
							`${title}`, 
							`${building}`, 
							`${table}`, 
							template.cate()
						);
						res.send(html);
					});
				});
			});
		});
	});
});

app.get('/yd3', function(req, res){
	var title = '역동관(3관)';
	var cr_eng = 'yd3';
	db.query(`SELECT cr_eng, cr_building FROM classroom GROUP BY cr_building, cr_eng ORDER BY cr_building ASC;`, function(err1, buildings){
		if (err1) throw err1;
		var building = template.list(buildings, cr_eng);
		db.query(`SELECT * FROM week;`, function(err2, weeks){
			if (err2) throw err2;
			db.query(`SELECT * FROM classroom WHERE cr_eng = '${cr_eng}' ORDER BY cr_classroom ASC;`, function(err3, classrooms){
				if (err3) throw err3;
				db.query(`SELECT le.* FROM lesson as le JOIN classroom as cr ON le.l_building = cr.cr_building WHERE cr.cr_eng = '${cr_eng}' GROUP BY le.l_id;`, function(err4, lessons){
					if (err4) throw err4;
					db.query(`SELECT * FROM teach;`, function(err5, teachs){
						if (err5) throw err5;
						var table = template.tableex(weeks, classrooms, lessons, teachs);
						var html = template.HTML(
							`${title}`, 
							`${building}`, 
							`${table}`, 
							template.cate()
						);
						res.send(html);
					});
				});
			});
		});
	});
});

app.get('/ydm', function(req, res){
	var title = '역동관(본관)';
	var cr_eng = 'ydm';
	db.query(`SELECT cr_eng, cr_building FROM classroom GROUP BY cr_building, cr_eng ORDER BY cr_building ASC;`, function(err1, buildings){
		if (err1) throw err1;
		var building = template.list(buildings, cr_eng);
		db.query(`SELECT * FROM week;`, function(err2, weeks){
			if (err2) throw err2;
			db.query(`SELECT * FROM classroom WHERE cr_eng = '${cr_eng}' ORDER BY cr_classroom ASC;`, function(err3, classrooms){
				if (err3) throw err3;
				db.query(`SELECT le.* FROM lesson as le JOIN classroom as cr ON le.l_building = cr.cr_building WHERE cr.cr_eng = '${cr_eng}' GROUP BY le.l_id;`, function(err4, lessons){
					if (err4) throw err4;
					db.query(`SELECT * FROM teach;`, function(err5, teachs){
						if (err5) throw err5;
						var table = template.tableex(weeks, classrooms, lessons, teachs);
						var html = template.HTML(
							`${title}`, 
							`${building}`, 
							`${table}`, 
							template.cate()
						);
						res.send(html);
					});
				});
			});
		});
	});
});

app.get('/tj', function(req, res){
	var title = '태전관';
	var cr_eng = 'tj';
	db.query(`SELECT cr_eng, cr_building FROM classroom GROUP BY cr_building, cr_eng ORDER BY cr_building ASC;`, function(err1, buildings){
		if (err1) throw err1;
		var building = template.list(buildings, cr_eng);
		db.query(`SELECT * FROM week;`, function(err2, weeks){
			if (err2) throw err2;
			db.query(`SELECT * FROM classroom WHERE cr_eng = '${cr_eng}' ORDER BY cr_classroom ASC;`, function(err3, classrooms){
				if (err3) throw err3;
				db.query(`SELECT le.* FROM lesson as le JOIN classroom as cr ON le.l_building = cr.cr_building WHERE cr.cr_eng = '${cr_eng}' GROUP BY le.l_id;`, function(err4, lessons){
					if (err4) throw err4;
					db.query(`SELECT * FROM teach;`, function(err5, teachs){
						if (err5) throw err5;
						var table = template.tableex(weeks, classrooms, lessons, teachs);
						var html = template.HTML(
							`${title}`, 
							`${building}`, 
							`${table}`, 
							template.cate()
						);
						res.send(html);
					});
				});
			});
		});
	});
});

// 404 오류
app.get(function(req,res){
	res.status(404).send('not found');
});

// 포트 8080
app.listen(port, function (err){
	if (err) return console.log(err);
	console.log("The server is listening on port 8080");
});