const express = require('express')
const app= express()

//midlleware

app.use(express.urlencoded());

app.use("/product", (req, res, next) => {
  console.log(req.body);
   res.redirect("/");

});

app.use("/addname", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Name</button></form>'
  );
  next()
});

app.use('/', (req,res,next)=>{
res.send('<h1>Home Page</h1>')
    
})

//settings
app.set('port', 3000)

// listen
app.listen(app.set('port'), ()=>{
    console.log(('listening on port 3000'));
})