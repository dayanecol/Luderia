<center>

# Luderia Board Game Rental Store

</center>

This is a web application for a board game rental store called Luderia.

## How to Set Up and Run the Application Locally

Before getting started, ensure you have the following installed:

Node.js
NPM

To start, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/),[npm](https://www.npmjs.com/package/npm) 
Additionally, it is good to have an editor to work with the code such as [VSCode](https://code.visualstudio.com/).

### :gear: Installation Steps

Clone the repository from GitHub:

```bash
git clone https://github.com/your-username/your-repository.git
```

Navigate to the project directory:

```bash
cd your-repository
```

Install dependencies:

```bash
npm install
```

---

### 🎲 Running the Application

Start the development server:

```bash
npm run dev
```

Open your web browser and go to http://localhost:4000 to view the application.

That's it! You should now be able to run the application locally on your machine. If you encounter any issues during setup or while running the application, feel free to consult the project's documentation or raise an issue on GitHub.

## Routes

POST /users: creates a new user in the system.

Request body:
```
{
  "name": "Carol",
  "email": "carol@gmail.com",
  "password": "123456"
}
```

POST /auth/sign-in: authenticates a user in the system.

Request body:
```
{
  "email": "carol@gmail.com",
  "password": "123456"
}
```

Response body (status 200 OK):
```
{
  "user": {
    "id": 1,
    "email": "carol@gmail.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

GET /users: returns all users in the system.

Response body:
```
[
  {
    "id": 1,
    "name": "Carol",
    "email": "carol@gmail.com",
    "created_at": "2023-03-21T12:00:00Z",
    "updated_at": "2023-03-21T12:00:00Z"
  },
  {
    "id": 2,
    "name": "John",
    "email": "john@gmail.com",
    "created_at": "2023-03-21T13:00:00Z",
    "updated_at": "2023-03-21T13:00:00Z"
  }
]
```

GET /games: returns all games in the system.

Response body:
```
[
  {
    "id": 1,
    "title": "Settlers of Catan",
    "description": "A popular board game where players compete to build settlements and cities on the island of Catan.",
    "price": 29.99,
    "quantity": 5,
    "created_at": "2023-03-21T12:00:00Z",
"updated_at": "2023-03-21T12:00:00Z"
},
{
"id": 2,
"title": "Ticket to Ride",
"description": "A popular board game where players compete to build train routes across North America.",
"price": 24.99,
"quantity": 10,
"created_at": "2023-03-20T14:30:00Z",
"updated_at": "2023-03-21T09:15:00Z"
},
{
"id": 3,
"title": "Codenames",
"description": "A party game where players compete to guess the words related to a given clue.",
"price": 19.99,
"quantity": 0,
"created_at": "2023-03-19T16:45:00Z",
"updated_at": "2023-03-21T11:30:00Z"
}
]
```

GET /games/available: returns all available games in the system.

Response body:
```
[
  {
    "id": 1,
    "title": "Settlers of Catan",
    "description": "A popular board game where players compete to build settlements and cities on the island of Catan.",
    "price": 29.99,
    "quantity": 5,
    "created_at": "2023-03-21T12:00:00Z",
    "updated_at": "2023-03-21T12:00:00Z"
  },
  {
    "id": 2,
    "title": "Monopoly",
    "description": "A classic board game where players buy and sell properties to become the richest player.",
    "price": 19.99,
    "quantity": 10,
    "created_at": "2023-03-21T13:00:00Z",
    "updated_at": "2023-03-21T13:00:00Z"
  }
]

```
