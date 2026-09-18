⚡ PulseVote

Ask. Vote. See It Happen.

PulseVote is a real-time polling platform built for fast, interactive voting experiences. Create a poll, share it with your audience, and watch responses appear live across connected clients.

Designed with a modern dark interface and a real-time backend architecture, PulseVote combines a React frontend with a Go API, MongoDB persistence, Redis-powered communication, and WebSocket updates.

🚀 What is PulseVote?

Traditional polling experiences often require users to refresh a page to see updated results.

PulseVote removes that friction.

When a participant submits a vote, the result can propagate through the real-time system and update connected browsers automatically.

Create → Share → Vote → Broadcast → Update


No manual refresh required.

✨ Core Capabilities
Capability	Description
⚡ Live Results	Poll results update in connected clients as votes arrive
🗳️ Poll Creation	Create polls with multiple answer options
🔗 Shareable Polls	Each poll can be shared through a public voting URL
📊 Result Visualization	Vote counts and percentages are displayed visually
🔴 Live Status	Real-time connection state is visible within the interface
🔐 Authentication	User accounts with protected application areas
👤 Profile Management	Manage profile information and account settings
📋 Poll Management	Create, monitor, close, and delete polls
📱 Responsive UI	Designed for desktop, tablet, and mobile screens
🎨 Dark Interface	Modern dark theme with vibrant accent colors
🧰 Technology Stack
Frontend
Technology	Role
React	Component-based user interface
Vite	Development server and production build tooling
Tailwind CSS	Utility-based styling
React Router	Client-side navigation
Framer Motion	UI animations and transitions
Lucide React	Interface icons
Sonner	Toast notifications
QRCode	Client-side QR code generation
Backend
Technology	Role
Go	Backend application
Gin	HTTP routing and middleware
MongoDB	Persistent application data
Redis	Real-time messaging / pub-sub
WebSocket	Live client updates
JWT	Authentication
bcrypt / x/crypto	Password hashing
godotenv	Environment configuration
🏗️ System Architecture

PulseVote separates the presentation layer from the application and real-time infrastructure.

                         ┌─────────────────┐
                         │      User       │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │ React Frontend  │
                         │   Vite + UI     │
                         └────────┬────────┘
                                  │
                         HTTP / WebSocket
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   Go Backend    │
                         │  Gin + JWT      │
                         └───────┬─┬───────┘
                                 │ │
                    ┌────────────┘ └────────────┐
                    ▼                           ▼
             ┌──────────────┐           ┌──────────────┐
             │   MongoDB    │           │    Redis     │
             │  Persistent  │           │   Pub/Sub    │
             │    Data      │           │ Real-Time    │
             └──────────────┘           └──────┬───────┘
                                               │
                                               ▼
                                      ┌─────────────────┐
                                      │ WebSocket Hub   │
                                      └────────┬────────┘
                                               │
                                               ▼
                                      Connected Browsers

🔄 Live Voting Pipeline

A vote moves through the system approximately like this:

Participant
    │
    │ Submit Vote
    ▼
React Application
    │
    │ POST request
    ▼
Go API
    │
    ├──────────────► MongoDB
    │                  │
    │                  └── Store / update vote data
    │
    └──────────────► Redis
                       │
                       │ Publish event
                       ▼
                  WebSocket Hub
                       │
                       │ Broadcast
                       ▼
                Connected Clients
                       │
                       ▼
                Updated Results


This architecture allows multiple connected browsers to receive live poll updates without repeatedly requesting the server for the latest results.

📁 Project Layout
PulseVote/
│
├── backend/
│   ├── cmd/
│   │   └── server/
│   │       └── main.go
│   │
│   ├── config/
│   │   └── config.go
│   │
│   ├── handlers/
│   │   └── handlers.go
│   │
│   ├── middleware/
│   │   └── auth.go
│   │
│   ├── models/
│   │   └── models.go
│   │
│   ├── realtime/
│   │   └── hub.go
│   │
│   ├── routes/
│   │   └── routes.go
│   │
│   ├── .env.example
│   ├── go.mod
│   └── go.sum
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── poll/
│   │   │   └── ui/
│   │   │
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── index.jsx
│   │
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── .gitignore
└── README.md

🔐 Authentication

PulseVote uses token-based authentication to protect user-specific functionality.

Authentication covers:

Account registration

User login

Protected application routes

Session persistence

Profile updates

Password changes

Account management

Protected pages redirect unauthenticated users to the login screen before returning them to their intended destination.

📊 Poll Lifecycle

A typical poll follows this lifecycle:

        ┌─────────────┐
        │ Create Poll │
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐
        │    Share    │
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐
        │    Voting   │
        │    Active   │
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐
        │ Live Results│
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐
        │    Closed   │
        └─────────────┘

🌐 Application Routes
Route	Access	Purpose
/	Public	PulseVote landing page
/signup	Public	Create an account
/login	Public	Sign in
/poll/:id	Public	Participate in a poll
/poll-not-found	Public	Invalid or unavailable poll
/dashboard	Protected	Poll overview and statistics
/polls	Protected	Manage created polls
/create	Protected	Create a new poll
/polls/:id	Protected	Poll management and results
/polls/:id/results	Protected	Live results view
/polls/:id/created	Protected	Share and QR experience
/profile	Protected	Profile management
/settings	Protected	Account and security settings
⚙️ Configuration
Backend

Create your environment file from the provided example:

cd backend
Copy-Item .env.example .env


Configure:

MONGO_URI=mongodb://localhost:27017
MONGO_DATABASE=livepoll
REDIS_URL=localhost:6379
JWT_SECRET=your-secure-secret
PORT=8081
FRONTEND_URL=http://localhost:5173

Frontend

Create the frontend environment file:

cd frontend
Copy-Item .env.example .env


Configure the API endpoint required by your application.

Never commit real .env files, passwords, tokens, or production credentials.

💻 Local Development
Requirements

Install the following before running PulseVote:

Go

Node.js

npm

MongoDB

Redis

Start the backend

From backend/:

go run ./cmd/server


The development API is configured to run on:

http://localhost:8081

Start the frontend

From frontend/:

npm install
npm run dev


Vite will provide the local development URL, normally:

http://localhost:5173

🧪 Production Build

Build the frontend with:

cd frontend
npm run build


The generated production assets are placed in:

frontend/dist/


You can preview the production build locally with:

npm run preview

🗄️ Data Layer

MongoDB provides persistent storage for application entities such as:

Users
Polls
Options
Votes


Redis is used as the real-time communication layer for distributing poll events between the backend and connected WebSocket clients.

🔌 Real-Time Communication

PulseVote uses WebSocket connections for live result delivery.

The frontend maintains a live connection while viewing real-time poll information.

If the connection is interrupted, the client can attempt to reconnect automatically rather than requiring a complete page reload.

The result experience is therefore designed around:

Vote
 ↓
Server Update
 ↓
Real-Time Event
 ↓
Connected Clients
 ↓
Animated Result Update

🛡️ Security Considerations

PulseVote includes several security-oriented mechanisms:

JWT-based authentication

Password hashing

Protected application routes

Server-side authentication middleware

Environment-based configuration

Account management controls

Validation of poll operations

Vote handling and deduplication logic

For production deployments, configure secure secrets, HTTPS, database authentication, and an exact frontend origin.

🧑‍💻 Development Workflow

For contributors:

# Create a feature branch
git checkout -b feature/your-feature

# Make your changes

# Check the frontend
npm run build

# Check your changes
git status

# Commit
git add .
git commit -m "Describe your change"

# Push
git push origin feature/your-feature


Keep frontend components consistent with the existing design system and avoid changing backend contracts unless the feature requires it.

🗺️ Roadmap

Potential areas for future development include:

📈 Advanced poll analytics

👥 Larger-scale audience participation

📤 Additional sharing options

🎨 More interface customization

📊 Historical voting insights

🚀 Production deployment improvements

🔔 Extended notification functionality

📌 Project Status

PulseVote is a full-stack real-time polling application combining a responsive frontend with a Go-powered backend and real-time infrastructure.

The project is structured for local development and can be extended toward production deployment with appropriate infrastructure and security configuration.

📄 License

See the repository's license file for licensing information.

👨‍💻 PulseVote

PulseVote — real-time polling built for instant interaction.

Ask. Vote. See It Happen.
