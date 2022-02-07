const express = require("express");
const app = express();

// mongodb+srv://dev:cK76YsPZzOcm9egN@mern.31vi2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get("/", (req, res) => res.send("This is working!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));