var fortune = require('./lib/fortune');
var express = require('express');
var app = express();

var handlebars = require('express3-handlebars')
                .create({defaultLayout:'main'});



app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port' , process.env.PORT || 3000);
 

app.get('/', (req,res) => {
    res.render('home');
});

app.get('/about', (req,res) => {
    res.render('about',{fortune: fortune.getFortune() });
});


 app.use(function (req,res) {
    res.type('text/plain');
    res.status(404);
    res.send('not found');
 });

 app.use((err,req,res,next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('error not found 500');
 });

 app.use(express.static(__dirname + '/public'));
 

 app.listen(app.get('port') , function(){
     console.log('helo its started');
     app.get('port')
 })
