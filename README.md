Simple To-Do CRUD App 

A clean, simple, and fully functional To-Do List application built to demonstrate the core principles of CRUD (Create, Read, Update, Delete).

This project uses a *Node.js & Express* backend to serve a RESTful API and a *vanilla JavaScript* frontend to interact with it. It's a perfect starting point for anyone learning about full-stack web development\!

-----

 Features

  * *Create:* Add new tasks to your to-do list.
  * *Read:* View all your current tasks in a clean interface.
  * *Update:* Easily edit an existing task by clicking the edit icon.
  * *Delete:* Remove tasks you've completed.
  * *In-Memory "Database":* The backend uses a simple array to store data, meaning no database setup is required\! (Data resets on server restart).
  * *RESTful API:* A well-defined backend API that the frontend communicates with.

-----

Tech Stack

This project is built with a minimal and modern tech stack:

  Backend:
      * [Node.js](https://nodejs.org/en/): A JavaScript runtime environment.
      * [Express.js](https://expressjs.com/): A minimal and flexible Node.js web application framework.
      * [CORS](https://expressjs.com/en/resources/middleware/cors.html): A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
    Frontend:
      * *HTML5:* For the structure of the application.
      * *CSS3:* For styling and making things look nice.
      * *Vanilla JavaScript:* For all the client-side logic, using the fetch API to communicate with the backend.

-----

 Getting Started

Ready to run the app on your local machine? Just follow these simple steps.

   Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) installed on your computer. You can check if you have it by running this command in your terminal:

bash
node -v

 Installation & Setup

1.  *Clone the repository*
    (If you haven't pushed it to GitHub yet, you can just use the local folder you already created\!)

    bash
    git clone https://github.com/YourUsername/simple-crud-app.git
    

2.  *Navigate to the project directory*

    bash
    cd simple-crud-app
    

3.  *Install the necessary packages*
    This command reads the package.json file and installs the dependencies (Express and CORS).

    bash
    npm install
    

4.  *Start the server*
    This will fire up the backend on your local machine.

    bash
    node server.js
    

    You should see a confirmation message in your terminal:
    ✅ Server is running on http://localhost:3000

5.  *Open the application in your browser*
    Navigate to [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000). That's it\! You should see the To-Do app running live.

-----

🌐 API Endpoints

The backend server provides the following RESTful API endpoints:

| Method | Endpoint      | Description                  |
| :----- | :------------ | :--------------------------- |
| GET  | /items      | Fetches all to-do items.     |
| POST | /items      | Creates a new to-do item.    |
| PUT  | /items/:id  | Updates an existing item.    |
| DELETE| /items/:id  | Deletes a specific item.     |

-----

 Contributing

Contributions, issues, and feature requests are welcome\! Feel free to check the [issues page](https://www.google.com/search?q=https://github.com/YourUsername/simple-crud-app/issues) if you want to contribute.

### Potential Improvements

  * Connect a real database like MongoDB or PostgreSQL.
  * Add data persistence so the list doesn't reset.
  * Implement user authentication.
  * Add animations and smoother UI transitions.

-----

## 📄 License

This project is licensed under the MIT License. Feel free to use and modify it as you wish.



Made with ❤ by Charan Kumar Nunna
