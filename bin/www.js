#!/usr/bin/env node

/**
 * Read environment variables
 */
if (process.env.NODE_ENV !== "production") require("dotenv").config();

/**
 * Believe it or not, reading process.env is expensive in NODE.js
 * https://github.com/nodejs/node/issues/3104
 * We want to cache process.env to a regular object since we don't expect it to change at runtime anyway.
 */
process.env = JSON.parse(JSON.stringify(process.env));

/**
 * Module dependencies.
 */

const app = require("../dist/app").default;
const chalkPipe = require("chalk-pipe");
const http = require("http");

// Start our App
app.set("port", process.env.PORT || 3050);

const server = http.createServer(app);

server.listen(app.get("port"), () => {
  console.log(
    `Server running on PORT ${chalkPipe("blue.bold")(server.address().port)}`
  );
});
