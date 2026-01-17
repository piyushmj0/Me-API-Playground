# Me-API Playground (Backend Assessment – Track A)

A minimal backend playground that stores my personal profile data in a PostgreSQL database and exposes it via a REST API.  
This project was built as part of the Backend Assessment (Track A) with a production-minded approach.

---

## 🚀 Live URLs

Backend API:
https://me-api-playground-74g2.onrender.com

Health Check:
https://me-api-playground-74g2.onrender.com/health

Profile API:
https://me-api-playground-74g2.onrender.com/profile

Frontend URL:
https://backend-profile-demo.netlify.app/

---

## 🧩 Features

- Node.js + Express REST API
- PostgreSQL database hosted on Render
- Secure database connection using SSL
- Query endpoints to filter projects by skill
- Minimal but production-ready setup

---

## 📡 API Endpoints

### Health Check
GET /health

Response:
{
  "status": "ok"
}

---

### Get Profile
GET /profile

Response:
{
  "id": 1,
  "name": "Piyush",
  "email": "piyush@email.com",
  "education": "B.Tech Computer Science"
}

---

### Get Projects by Skill
GET /projects?skill=javascript

Response:
[
  {
    "title": "Me-API Playground",
    "description": "Personal profile backend API",
    "link": "https://github.com/piyushmj0/Me-API-Playground"
  }
]

---

## 🗄️ Database

- Database: PostgreSQL
- Hosting: Render
- Schema defined in schema.sql
- Seed data defined in seed.sql (real personal data)

### Tables
- profile
- skills
- projects
- project_skills
- links

---

## 🏗️ Project Structure

backend/
├── src/
│   ├── db.js
│   ├── index.js
│   └── routes/
│       ├── profile.js
│       └── projects.js
├── schema.sql
├── seed.sql
├── package.json
└── README.md

---

## ⚙️ Local Setup

### Clone Repository
git clone https://github.com/piyushmj0/Me-API-Playground.git
cd Me-API-Playground/backend

---

### Install Dependencies
npm install

---

### Environment Variables

Create a .env file:

DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<db>
PORT=3000

---

### Run Database Schema & Seed
psql $DATABASE_URL -f schema.sql
psql $DATABASE_URL -f seed.sql

---

### Start Server
npm start

Server runs at:
http://localhost:3000

---

## ☁️ Deployment

- Backend deployed on Render
- PostgreSQL hosted on Render
- Environment variables configured via Render dashboard
- SSL enabled for PostgreSQL connection

---

## ⚠️ Known Limitations

- No authentication (read-only API)
- Single-user profile (intentional for scope)
- No pagination
- Minimal frontend only

---

## 🔮 What I’d Do Next

- Add authentication for write operations
- Add pagination and caching
- Improve frontend UI
- Add automated tests and CI
- Add rate limiting

---

## 📄 Resume

Resume Link:
[ADD_YOUR_RESUME_LINK_HERE](https://drive.google.com/file/d/1J0zq9Zlt7nSywLNsnNVm-plTUEvUn5uJ/view?usp=sharing)

---

## 👤 Author

Piyush  
Backend Developer  
GitHub: https://github.com/piyushmj0
