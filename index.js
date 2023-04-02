const express = require("express");
const app = express();
const shortUrl = require("./routes/url");
const homeRoutes = require("./routes/home");

//middleawares are the functions that get called before any of the API calls
app.use(express.json());// accepts application.json
app.use(express.static("public"));//put html in public folder and make it accessible
app.use(express.urlencoded({extended: false}));//accept req.body

app.use("/urlapi",shortUrl);
app.use("/",homeRoutes)


const PORT = 1337 ;
app.listen(PORT,() => {
  console.log("App is running on Port: ",PORT);
})

