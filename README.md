# [UduP@y App](https://udupay.netlify.com/) :credit_card:

[![UduPay](https://circleci.com/gh/neorusse/udupay.svg?style=svg)](https://circleci.com/gh/neorusse/workflows/udupay) [![Netlify Status](https://api.netlify.com/api/v1/badges/6deb6540-d4a1-4dae-94f4-f752c70d20d8/deploy-status)](https://app.netlify.com/sites/udupay/deploys) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Project Description

A web [app](https://udupay.netlify.com/) for :house_with_garden: Residential Dues Collection :house_with_garden:. It enables city, district, towns, village, street officials to collect dues such as development levy, sanitation dues, security and others from residents of a locality.

### Table of Content

[Features](#features)<br/>
[Project Management](#project-management)<br/>
[Technology Used](#technology-used)<br/>
[Installation](#installation)<br/>
[Development](#development)<br/>
[Testing](#testing)<br/>
[API End Points](#api-end-points)<br/>
[API Documentation](#api-documentation)<br/>
[License](#license)<br/>
[Credits](#credits)<br/>
[Author](#author)

### Features

Users can sign up.<br/>
Users can login.<br/>
Users can pay for dues.<br/>
Users can view dues payment history.<br/>
Users can generate due receipt and report.<br/>
Admin can view all users and perform all CRUD operations on users.<br/>

### Project Management

Project was managed with [Pivotal Tracker](https://www.pivotaltracker.com/n/projects/2426882) and can be accessed via this link [UduPay Project Dashboard](https://www.pivotaltracker.com/n/projects/2426882).

### Technology Used

Modern JavaScript features and technology was used for this [project](https://udupay.netlify.com/).

NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server.

ExpressJS is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

PostgreSQL - PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and technical standards compliance. It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users.

React - React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.

TypeScript - TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript.

Docker - Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.

CircleCI - Prides itself as the best continuous integration and delivery platform for Linux, macOS, and Android, in the cloud or self-hosted.

Pivotal Tracker - Pivotal Tracker is the agile project management tool of choice for developers around the world for real-time collaboration around a shared, prioritized backlog.

### Installation

Install packages

```bash
yarn
```

Create .env file in your root directory and Change DATABASE_URL to suite your connection

- Change user to your username
- Change password to your postgresql password
- Change database to 'udupay'
- Then go to your postgresql database and create database with name 'udupay'

```bash
DATABASE_URL='postgresql://user:password@localhost/database'
```

Run the server with

```bash
yarn tsc
yarn start
```

The server runs on port 3050.

Then run the client

```bash
cd client
yarn
yarn start
```

---

### Development

This project uses [EditorConfig](http://editorconfig.org) to standardize text editor configuration. Visit this [link](http://editorconfig.org) for more details.

### Testing

This project uses [Jest](https://jestjs.io/) and [Cypress](https://www.cypress.io/) for testing.

To execute tests:

```bash
yarn test
```

### Credit Card details for making demo payment

---

Test MasterCard PIN authentication

    5531 8866 5214 2950
    cvv 564
    Expiry: 09/22
    Pin 3310
    otp 12345

---

Code coverage generated using [Jest](https://jestjs.io/)

### API End Points

#### API URL

The API was hosted on Heroku and can be access via [UduPay](https://udupay.herokuapp.com/)

| S/N | HTTP VERB | ENDPOINT                          | FUNCTIONALITY                             |
| --: | --------- | --------------------------------- | ----------------------------------------- |
|   1 | POST      | api/v1/users/signup               | Enable user to signup                     |
|   2 | POST      | api/v1/users/login                | Enable user to login                      |
|   3 | POST      | api/v1/users/forgetPassword       | Enable user to request for password reset |
|   4 | POST      | api/v1/users/resetPassword/:token | Enable user to reset password             |
|   5 | POST      | api/v1/users/updatePassword       | Enable user to update password            |
|   6 | GET       | api/v1/users/me                   | Enable log-in user to fetch his details   |
|   7 | PATCH     | api/v1/users/updateMe             | Enable log-in user to update his details  |
|   8 | DELETE    | api/v1/users/deleteMe             | Enable log-in user to delete his account  |
|   9 | GET       | api/v1/users/getAllUsers          | Enable admin to fetch all users           |
|  10 | GET       | api/v1/user/:userId               | Enable admin to fetch a user              |
|  11 | DELETE    | api/v1/user/:userId               | Enable admin to delete a user             |
|  12 | POST      | api/v1/users/payment              | Enable user to make dues payment          |
|  13 | GET       | api/v1/users/search               | Enable admin to search for user           |
|  14 | POST      | api/v1/dues/create                | Enable admin to create a due              |
|  15 | GET       | api/v1/dues/getAllDues            | Enable admin to fetch all dues            |
|  16 | PATCH     | api/v1/dues/:dueId                | Enable admin to update a due              |
|  17 | DELETE    | api/v1/dues/:dueId                | Enable admin to delete a due              |

### API Documentation

API Documentation was done using Swagger, acccess via [UduPay](https://udupay.com/api-doc/)

### License

[MIT](https://opensource.org/licenses/MIT)

### Credits

[Bond Akinmade of Decagon Institute](https://decagonhq.com/)

### Author

[Russell Nyorere](https://neorusse.github.io/)
