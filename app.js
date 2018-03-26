const express=require('express');

const app=express();

const port=5000;

const exphbs  = require('express-handlebars');





// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
  }));
app.set('view engine', 'handlebars');


//index route
app.get('/', (req, res) => {
    const title = 'Welcome Jason';
    res.render('index', {
      title: title
    });
});

//About Route
app.get('/about',(req,res)=>{
    res.render('ABOUT');
});



app.listen(port,()=>{
    console.log("server started on port");
});