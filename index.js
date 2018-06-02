const express = require("express");
const path = require("path");

const port = process.env.PORT || 8080;

express()
  .use(express.static(path.join(__dirname, "public")))
  .listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
