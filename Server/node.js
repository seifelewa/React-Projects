const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../React-project/build")));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/test1", (req, res) => {
  res.json({
    message: [{name: "Abdel-Rahman", rate:20, rating:1, jobCount:30},
    {name: "Maryam Nouh", rate:40, rating:3, jobCount:56},
    {name: "Seif Elewa", rate:30, rating:2, jobCount:43},
    {name: "Youssef Mansi", rate:20, rating:5, jobCount:99},
  ]
  });
});

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../React-project/build", "index.html")
  );
});
