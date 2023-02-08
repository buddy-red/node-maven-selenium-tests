var http = require('http');

http.createServer(function (req, res) {
  res.write(`
	<!doctype html>
	<html lang="en">
	<head>
	  <meta charset="utf-8">
	
	  <title>Buddy：DevOps自动化平台</title>
	  <meta name="description" content="大家好!">
	</head>
	
	<body>
		<div>
			大家好! 这是自动化运维Buddy本地部署系统演示。
		</div>
	</body>
	</html>
  `);
  res.end();
}).listen(80);