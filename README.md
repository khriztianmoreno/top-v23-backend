# NODE-SERVER Example 💻

Hello and welcome! This Node.JS project demonstrates a simple architecture building a full API with Node.JS, Express.JS, and MongoDB presents an architectural demo of these features:

- Built with Node.js and Express
- Mongoose ODM
- REST API

## Express Router and Routes

| Route               | HTTP Verb | Route Middleware   | Description                          |
| --------------------| --------- | ------------------ | ------------------------------------ |
| /api/healthcheck    | GET       |                    | Show a simple message                |
| /api/jobs           | GET       |                    | Get list of jobs                    |
| /api/jobs           | POST      |                    | Creates a new jobs                  |
| /api/jobs/:id       | GET       |                    | Get a single jobs                   |
| /api/jobs/:id       | DELETE    |                    | Deletes a job                       |


## Usage
The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a note or log in, here we have some examples.

### Authentication **user** `/auth/local/login`:

Request Body:
```json
{
  "email": "kz@mz.com",
  "password": "12345"
}
```

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFjNjM1MTljZjlkNTQ5YjA3YWU2NTEiLCJpYXQiOjE2MjE5MTMyNjIsImV4cCI6MTYyMTk5OTY2Mn0.WkptwtzkfxNu5sQ28idbt4bJ7RDbXvVNlZXF0Z0ht-0"
}
```
### Basic example **Create User** `/api/user`:

Request Body:
```json
{
  "firstName": "john",
  "lastName": "doe",
  "password": "123456",
  "email": "myemail@mail.com"
}
```

Response:

```json
{
  "firstName": "john",
  "lastName": "doe",
  "role": "viewer",
  "email": "myemail.moreno@mail.com"
}
```

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 16.x.x, npm >= 8.3.x
- [MongoDB](https://www.mongodb.org/) - Mongo Atlas is a good option

### Developing

1. Run `npm install` to install server dependencies.

2. Configure the env
```shell
$ cp .env.example .env
```

3. Update `.env` with the required info

4. Run `npm run dev` to start the development server.
