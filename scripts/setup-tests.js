"use strict";

const DATABASE_URL = process.env.DATABASE_URL;
const CI = !!process.env.CI;

if (DATABASE_URL && !CI) {
  const rl = require("readline-sync");

  console.log(`Your database URL is set to ${DATABASE_URL}`);
  console.log(`Migrations would not be run`);
  console.log(`This database might be deleted after the tests are run`);
  console.log(`Type "unset" if you'd like to unset this variable`);
  const answer = rl.question(
    "Are you sure you want to continue?[y|yes|n|no|unset] ",
    {
      defaultInput: "no"
    }
  );

  const response = answer && answer.trim().toLowerCase();

  if (!response) {
    process.exit(1);
  }

  switch (response) {
    case "unset":
    case '"unset"':
      delete process.env.DATABASE_URL;
      break;

    case "yes":
    case "y":
      break;

    default:
      process.exit(1);
  }
}

// Set the image that @databases/pg-test should use for testing
process.env.PG_TEST_IMAGE = "circleci/postgres:11.6-alpine-ram";
process.env.PG_TEST_DB = "udupay";

const jest = require("jest");

jest.run();
