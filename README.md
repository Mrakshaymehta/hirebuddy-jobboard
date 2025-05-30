# HireBuddy – AI-Powered Job Matching Platform

## 📌 Project Overview
HireBuddy is a full-stack AI-powered job board web application designed to enhance job search and resume matching experiences. This platform allows users to upload their resume, predicts their most suitable job role using AI, and dynamically displays relevant job opportunities from a searchable database.

---

## 🧠 Key Features

### 🎯 AI-Based Resume Analysis
- Users can upload a resume in `.txt` format.
- The resume content is sent to OpenAI's GPT-3.5 model.
- The AI model analyzes the text and predicts the most relevant job role.

### 📂 Job Listings and Search
- A job dataset in `.jsonl` format is parsed and stored in MongoDB Atlas.
- The backend API allows retrieval of job listings.
- Users can search and filter jobs based on predicted or manually entered job titles.

### 🔎 Smart Job Matching
- After resume upload, the app uses the predicted job role to fetch relevant job listings.
- Matched jobs are displayed instantly for user exploration.

### 🖥️ Clean and Responsive UI
- Built with React and Tailwind CSS.
- Responsive design for both desktop and mobile users.
- Components include a resume upload form, a searchable job list, and dynamic filters.

---

## 🧱 Tech Stack

### Frontend:
- React (CRA)
- Tailwind CSS
- Axios

### Backend:
- Node.js
- Express.js
- Multer (for file uploads)
- Mongoose (MongoDB ODM)

### Database:
- MongoDB Atlas (Cloud-hosted NoSQL database)

### AI Integration:
- OpenAI GPT-3.5 API for role prediction

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Mrakshaymehta/hirebuddy-jobboard.git
cd hirebuddy-jobboard
```

### 2. Set Up Environment Variables (in `/server`)
Create a `.env` file:
```env
MONGO_URI=your_mongo_uri_here
OPENAI_API_KEY=your_openai_key_here
PORT=5000
```

### 3. Install Dependencies
```bash
cd client && npm install
cd ../server && npm install
```

### 4. Run the App
```bash
# Start backend
cd server
npm start

# Start frontend (in another terminal)
cd client
npm start
```

---

## 📁 Folder Structure
```
hirebuddy-jobboard/
├── client/            # React frontend
│   └── src/components # ResumeUpload, JobList, SearchBar
├── server/            # Node backend
│   ├── models/        # Mongoose schema
│   ├── routes/        # Express route handlers
│   └── server.js      # App entry point
```

---

## 📊 Sample Use Case Flow
1. User visits the homepage.
2. Uploads resume file.
3. Resume is parsed and sent to OpenAI.
4. AI predicts a job role (e.g., "Frontend Developer").
5. The frontend uses the predicted role to fetch and display matching jobs.
6. User can explore or search jobs by entering different keywords.

---

## 🔮 Future Enhancements
- Add PDF to text parsing for resume upload
- Improve semantic job-role matching
- Add job application and bookmarking features
- Implement user authentication for personalized dashboards

---

## 📎 Repository
GitHub: [https://github.com/Mrakshaymehta/hirebuddy-jobboard](https://github.com/Mrakshaymehta/hirebuddy-jobboard)
