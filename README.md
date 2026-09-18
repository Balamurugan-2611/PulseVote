PulseVote

Real-time polling. Instant responses. Live results.

PulseVote is a real-time polling platform that lets users create polls, share them with others, collect votes, and watch results update live.

Built with a modern web interface and a real-time backend architecture, PulseVote focuses on making live audience interaction simple, fast, and responsive.

✨ Features

📊 Create Polls — Create custom polls with multiple voting options.

⚡ Live Results — View poll results as votes are submitted.

🗳️ Real-Time Voting — Votes are reflected without requiring manual page refreshes.

🔐 User Authentication — Secure user registration and login.

📱 Responsive Interface — Designed to work across desktop, tablet, and mobile screens.

📈 Result Visualization — Clear visual representation of voting percentages and totals.

🔗 Poll Sharing — Share polls with participants through the application.

⚙️ Poll Management — Manage and monitor created polls.

🟢 Connection Status — Real-time connection indicators help users understand the live connection state.

🎨 Modern Dark UI — A dark, tech-focused interface with vibrant real-time accents.

🛠️ Tech Stack
Layer	Technology
Frontend	React
Build Tool	Vite
Styling	Tailwind CSS
Backend	Go
Database	MongoDB
Real-Time / Cache	Redis
Authentication	JWT
Package Management	npm
🏗️ Architecture

PulseVote follows a frontend/backend architecture where the frontend communicates with the Go backend for application operations while MongoDB provides persistent data storage and Redis supports real-time application functionality.

User
React Frontend
Go Backend API
(MongoDB)
(Redis)

The architecture separates the user interface, application logic, persistent storage, and real-time infrastructure.

📁 Project Structure

Backend

backend/cmd/ — Application entry points

backend/.env.example — Environment configuration template

backend/go.mod — Go module definition

Frontend

frontend/src/components/ — Reusable UI components

frontend/src/pages/ — Application pages

frontend/src/data/ — Poll/demo data

frontend/package.json — Frontend dependencies and scripts

frontend/tailwind.config.js — Tailwind CSS configuration

Root

.gitignore — Git ignore rules

README.md — Project documentation

🚀 Getting Started
Prerequisites

Make sure the following are installed:

Node.js

npm

Go

MongoDB

Redis

1. Clone the repository
git clone https://github.com/Balamurugan-2611/PulseVote.git
cd PulseVote

2. Configure the backend

Navigate to the backend:

cd backend


Create your environment file using .env.example as a reference.

Example:

MONGO_URI=your_mongodb_connection_string
MONGO_DATABASE=livepoll
REDIS_URL=localhost:6379
JWT_SECRET=your_secret_here
PORT=8081
FRONTEND_URL=http://localhost:5173


Never commit real credentials or secrets to GitHub.

3. Start MongoDB

Make sure MongoDB is running locally and accessible through the connection string configured in your .env.

The default application database is:

livepoll

4. Start Redis

Make sure Redis is running on:

localhost:6379

5. Start the backend

From the backend directory:

go run ./cmd/server


The backend runs on:

http://localhost:8081

6. Install frontend dependencies

Open another terminal:

cd frontend
npm install

7. Start the frontend
npm run dev


The Vite development server will normally be available at:

http://localhost:5173


Open the address in your browser.

🔐 Environment Variables

The backend uses environment variables for configuration.

Variable	Purpose
MONGO_URI	MongoDB connection string
MONGO_DATABASE	MongoDB database name
REDIS_URL	Redis server address
JWT_SECRET	Secret used for JWT authentication
PORT	Backend server port
FRONTEND_URL	Frontend origin used by the backend

Example:

MONGO_URI=your_mongodb_connection_string
MONGO_DATABASE=livepoll
REDIS_URL=localhost:6379
JWT_SECRET=your_secret_here
PORT=8081
FRONTEND_URL=http://localhost:5173

🧪 Development
Frontend
cd frontend
npm install
npm run dev

Frontend production build
npm run build

Backend
cd backend
go run ./cmd/server

Backend build
go build -o livepoll.exe ./cmd/server

⚡ Real-Time Polling

PulseVote is designed around live poll interaction.

⚡ Real-Time Polling Flow

A typical voting flow looks like this:

                    ┌─────────────┐
                    │    User     │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │  Frontend   │
                    │ React + UI  │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   Backend   │
                    │     Go      │
                    └──────┬──────┘
                           │
                  ┌────────┴────────┐
                  │                 │
                  ▼                 ▼
           ┌─────────────┐   ┌─────────────┐
           │  MongoDB    │   │    Redis    │
           │ Persistent  │   │ Real-Time   │
           │   Storage   │   │    Layer    │
           └─────────────┘   └──────┬──────┘
                                    │
                                    ▼
                            ┌─────────────┐
                            │  Connected  │
                            │   Clients   │
                            └──────┬──────┘
                                   │
                                   ▼
                            ┌─────────────┐
                            │   Updated   │
                            │   Results   │
                            └─────────────┘


Votes are processed by the backend, persisted in MongoDB, and propagated through the real-time layer so connected clients can receive updated poll results without manually refreshing the page.


This allows participants to see changes to poll results without relying on repeated manual refreshes.

🎨 Interface

PulseVote uses a modern dark interface designed around live interaction.

Design direction

Dark-first visual system

Indigo and cyan accent colors

High-contrast result visualization

Responsive layouts

Real-time status indicators

Modern card-based components

Smooth interface transitions

🔒 Security

For local development and production deployments:

Never commit .env files containing secrets.

Use a strong, unique JWT_SECRET.

Use secure MongoDB credentials in production.

Configure the production frontend origin correctly.

Use HTTPS in production.

Avoid exposing database or Redis services directly to the public internet.

🤝 Contributing

Contributions are welcome.

Development workflow

Fork the repository.

Clone your fork.

Create a feature branch.

git checkout -b feature/your-feature


Make your changes.

Test the frontend and backend.

Commit your changes.

git add .
git commit -m "Add your feature"


Push your branch.

git push origin feature/your-feature


Open a Pull Request.

📌 Project Status

PulseVote is an actively developed real-time polling application.

The project is structured to support continued improvements to the polling experience, real-time interaction, user management, and interface.

📄 License

License information has not yet been specified.

👨‍💻 Project

PulseVote

A real-time polling experience focused on fast interaction, live results, and a modern web interface.

<p align="center"> <strong>PulseVote</strong><br> Ask. Vote. See It Happen. </p>
