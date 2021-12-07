const express = require("express");
const app = express();

//midlleware
app.use(express.urlencoded());


app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/addname", (req, res) => {
  res.send(
    '<form action="/name" method="POST"><input type="text" name="title"><button type="submit">Add Name</button></form>'
  );
});

app.post("/name", (req,res) => {
  console.log(req.body);
  res.redirect('/')
  
});

app.get("/editname", (req, res) => {
  res.status(404).send('<h1>Eror not yet implemented</h1>')
});

//settings
app.set("port", 3000);

// listen
app.listen(app.set("port"), () => {
  console.log("listening on port 3000");
});
