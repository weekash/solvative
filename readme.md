# Solvative Assignment

This project aims to implement review CRUD operations.

## Features

- **CRUD**: Fully supports crud operations.

## To Be Done

- **Web Sockets**: Need to integrate web sockets.

## Project Structure

The project is structured into the following directories:

- **server**: Contains the backend server code.
- **client**: Includes the frontend React application code.

## Technologies Used

- **Express**: Backend framework for handling HTTP requests and responses.
- **MYSQL**:  Database,
- **Sequelize and Sequelize CLI**: ORM's and command line to manage migrations and seeders.
- **React**: Frontend library for building user interfaces.


## Installation

1. Clone the repository: `git clone https://github.com/weekash/solvative.git`
2. Navigate to the server directory: `cd server`
3. Install dependencies: `npm install`
4. Add a `.env` file at root containing variables from `.env.example`
5. Install sequelize-cli globally  `npm i -g sequelize-cli`
6. Use sequelize to migrate and run seeders `sequelize db:migrate` and `sequelize db:seed:all` 
5. Start the server: `npm start`
6. Navigate to the client directory: `cd client`
7. Install dependencies: `npm install`
8. Add a `.env` file at root containing variables from `.env.example`
9. Start the client: `npm run dev`


## Usage

1. Access the web application in your browser `http://localhost:5173`.

