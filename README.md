# UduPay [App](https://udupay.com/)

### Project Description

A web [app](https://udupay.com/) for Residential Dues Collection. It enables city, district, towns, village, street officials to collect dues such as development levy, sanitation dues, security and others from residents of a locality.

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

Project is managed with [Pivotal Tracker](https://www.pivotaltracker.com) and can be accessed via this link [UduPay](https://www.pivotaltracker.com/n/projects/2314418).

### Technology Used

Modern JavaScript features and technology was used for this [project](https://udupay.com/).

NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server.

ExpressJS is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

PostgreSQL - PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and technical standards compliance. It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users.

React - React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.

TypeScript - TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript.

### Installation

```bash
yarn
yarn run dev
```

The server runs on port 3050.

### Development

This project uses [EditorConfig](http://editorconfig.org) to standardize text editor configuration. Visit this [link](http://editorconfig.org) for more details.

### Testing

This project uses [Jest](https://jestjs.io/) and [Cypress](https://www.cypress.io/) for testing.

To execute tests:

```bash
yarn test
```

Code coverage generated using [Jest](https://jestjs.io/)

### API End Points

#### API URL

The API was hosted on Heroku and can be access via [UduPay](https://udupay.com/)

| S/N | HTTP VERB | ENDPOINT           | FUNCTIONALITY                    |
| --: | --------- | ------------------ | -------------------------------- |
|   1 | POST      | api/v1/auth/signup | Enable user to signup            |
|   2 | POST      | api/v1/auth/login  | Enable user to login             |
|   3 | POST      | api/v1/payments    | Enable user to make dues payment |

### API Documentation

API Documentation was done using Swagger, acccess via [UduPay](https://udupay.com/api-doc/)

### License

[MIT](https://opensource.org/licenses/MIT)

### Credits

[Bond Akinmade of Decagon Institute](https://decagonhq.com/)

### Author

[Russell Nyorere](https://neorusse.github.io/)
