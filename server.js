'strict mode'
const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const port  = Number(process.env.PORT || 3000);
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
//app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));
//app.use(favicon(__dirname+'/public/favicon.ico'));

require('./app/routes.js')(app);

app.listen(port);
console.log("App listening on port " + port);
