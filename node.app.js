var express = require('express');

var downloads = {};

var app = express.createServer(
    express.logger()
  , express.bodyParser()
);

app.configure(function(){
    app.use(app.router);
    app.use("/app", express.static(__dirname + '/app'));
    app.use(express.logger({ format: ':method :url' }));
});

app.listen(3000);