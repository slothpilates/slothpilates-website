import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


  var data = {
    year: new Date().getFullYear(),
    language: "TW",
  };


app.get("/", (req, res) => {
    res.render("indextw.ejs", data);
  });

app.get("/EN", (req, res) => {
  data.language="EN";
  res.render("index.ejs",data);
});

app.get("/TW", (req, res) => {
  data.language="TW";
  res.render("indextw.ejs",data);
});

//app.post("/reformer", async (req, res) => {
//  const searchId = req.body.id;
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
//  try {
//    const result = await axios.patch(API_URL + "/secrets/"+searchId, req.body,config);
//    res.render("index.ejs", { content: JSON.stringify(result.data) });
//  } catch (error) {
//    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
//  }
//});

app.get("/reformer", async (req, res) => {
  console.log(data.language);
  try{
  switch(data.language) {
    case "TW": {

      res.render("reformertw.ejs", data);
      break;
    }
    case "EN": {

      res.render("reformeren.ejs", data);
      break;
    }
    default: break;
  }} catch(error) {
    console.log("error");
}});

app.get("/group", (req,res) => {
  res.render("group.ejs",data);
})
app.get("/private", (req,res) => {
  res.render("private.ejs",data);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});