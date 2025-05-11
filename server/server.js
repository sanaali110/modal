// Express server
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
const fs = require("node:fs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const users = require("./constants/users.json");

/*
 *  Enables user to login to the server
 **/
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  let resObj = {};
  if (user) {
    const matchedPassword = user.password === password;
    if (matchedPassword) {
      resObj = { ok: true };
    } else {
      resObj = { ok: false, error: "Password is wrong" };
    }
    res.status(200);
  } else {
    res.status(500);
    resObj = { ok: false, error: "user not found" };
  }
  res.send(resObj);
});

/*
 * Get the user information by userId
 **/
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => String(user.id) === String(id));
  res.send(user);
});

/*
 * User can signup using this endpoint
 **/
app.post("/signup", (req, res) => {
  const { username, location, name, password } = req.body;
  const userExist = users.some((user) => user.username === username);
  if (userExist) {
    res.status(500);
    res.send("user already exist");
  }
  const content = [
    ...users,
    {
      id: users.length + 1,
      username,
      location,
      name,
      password,
    },
  ];
  fs.writeFile(
    "./constants/users.json",
    JSON.stringify(content, null, 2),
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("file written successfully");
      }
    }
  );
  res.status(200);
  res.send("user created successfully");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
