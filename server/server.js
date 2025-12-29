// Express server
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
const fs = require("node:fs");
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const users = require("./constants/users.json");
const cors = require("cors");
app.use(cors());

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

// /*
//  * Get the user information by userId
//  **/
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => String(user.id) === String(id));
  res.send(user);
});

// /*
//  * User can signup using this endpoint
//  **/
const filePath = path.join(__dirname, "constants", "users.json");

app.post("/signup", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).send("Could not read users file");

    let users = JSON.parse(data);
    const { username, location, name, password } = req.body;

    const userExist = users.some((user) => user.username === username);
    if (userExist) {
      return res.status(400).send("User already exists");
    }

    const newUser = {
      id: users.length + 1,
      username,
      location,
      name,
      password,
    };

    users.push(newUser);

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).send("Could not write user");

      return res.status(201).send("User created successfully");
    });
  });
});

app.get("/", (req, res) => {
  res.send("Login route is working");
});
// app.get("/login", (req, res) => {
//   res.send("Hello from Express!");
// });

// Improved SPA fallback: only serve index.html for non-API, non-static requests
const distPath = path.join(__dirname, "..", "build");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.use((req, res, next) => {
    // Skip API and static file requests
    if (req.path.startsWith("/api") || req.path.startsWith("/user") || req.path.startsWith("/login") || req.path.startsWith("/signup") || req.path.startsWith("/static") || req.path.startsWith("/public")) {
      return next();
    }
    const indexFile = path.join(distPath, "index.html");
    if (fs.existsSync(indexFile)) {
      res.sendFile(indexFile);
    } else {
      next();
    }
  });
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
