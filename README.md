# Task Tracker Demo

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Contributing](#contributing)
8. [License](#license)
9. [Acknowledgments](#acknowledgments)

## Introduction

This is a simple task tracker application built using React for the frontend and Node.js for the backend. The application allows users to create, view, and manage tasks.

## Features

- Create new tasks with title, description, and details
- View a list of all tasks
- View details of a specific task
- Backend API to support CRUD operations

## Technologies Used

- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB
- State Management: React Hooks
- Routing: React Router
- Backend API: RESTful API

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Yarn or npm

### Installation

1. Clone the repository
    ```bash
    git clone https://github.com/cargonzalv/task-tracker-demo.git
    ```

2. Navigate to the project directory
    ```bash
    cd task-tracker-demo
    ```

3. Install backend dependencies
    ```bash
    npm install
    ```

4. Navigate to the client directory
    ```bash
    cd client
    ```

5. Install frontend dependencies
    ```bash
    npm install
    ```

6. Start the backend server
    ```bash
    npm start
    ```

7. Start the frontend server (in a new terminal window)
    ```bash
    cd client
    npm start
    ```

## Usage

Open your web browser and navigate to `http://localhost:3000` to start using the Task Tracker application.

## API Endpoints

- `GET /api/tasks`: Fetch all tasks
- `POST /api/tasks`: Create a new task
- `GET /api/tasks/:id`: Fetch a specific task by ID

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
