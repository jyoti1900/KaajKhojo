
<div align="center">

# 💼 KaajKhojo

### Smart Job Portal & Recruitment Platform

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![WebRTC](https://img.shields.io/badge/WebRTC-333333?style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

A modern **MERN Stack Recruitment Platform** that connects **job seekers**, **recruiters**, and **administrators** through secure authentication, real-time messaging, video interviews, and intelligent job management.

</div>

# 🚀 Overview

KaajKhojo is a full-stack recruitment platform developed using the **MERN Stack** to simplify and modernize the hiring process. The platform enables recruiters to post job openings, manage applications, and conduct interviews, while job seekers can create professional profiles, apply for jobs, and communicate directly with recruiters.

The application integrates **Socket.IO** for real-time messaging and **WebRTC** for browser-based video interviews, creating a seamless recruitment experience.

---

# 💡 Project Motivation

| Challenge | Solution |
|-----------|----------|
| Delayed recruiter–candidate communication | 💬 Real-time messaging |
| Disconnected interview workflow | 🎥 Integrated WebRTC video interviews |
| Weak authentication mechanisms | 🔐 Secure JWT-based authentication |
| Scattered recruitment process | 📋 Centralized job management |
| Limited role management | 👥 Role-based dashboards |
| Scalability concerns | ☁️ Cloud-ready architecture |

# 🎯 Objectives

| Objective | Description |
|-----------|-------------|
| 📌 Centralized Platform | Build a unified recruitment system |
| 💬 Better Communication | Improve recruiter and candidate interaction |
| 🔐 Secure Authentication | Enable authentication and authorization |
| ⚡ Scalable Architecture | Develop a responsive, scalable application |
| ⏱ Faster Hiring | Reduce recruitment turnaround time |
| 😊 Better User Experience | Deliver a modern and intuitive interface |


# ✨ Features

| 👤 Job Seeker | 🏢 Recruiter | 🛡 Admin |
|---------------|--------------|----------|
| ✅ User Registration & Login | ✅ Recruiter Registration | ✅ Dashboard |
| ✅ Profile Management | ✅ Company Profile Management | ✅ Manage Users |
| ✅ Resume Upload | ✅ Create Job Listings | ✅ Manage Recruiters |
| ✅ Browse Jobs | ✅ Edit/Delete Jobs | ✅ Moderate Job Posts |
| ✅ Search & Filter Jobs | ✅ View Applicants | ✅ Manage Applications |
| ✅ Apply for Jobs | ✅ Shortlist Candidates | ✅ Platform Monitoring |
| ✅ Application Tracking | ✅ Chat with Candidates | |
| ✅ Real-Time Chat | ✅ Conduct Video Interviews | |
| ✅ Video Interviews | | |

# 💬 Real-Time Communication

| Feature | Description |
|---------|-------------|
| 💬 Socket.IO Live Chat | Instant recruiter–candidate messaging |
| 🎥 WebRTC Video Calling | Browser-based video interviews |
| 🔒 Secure Peer-to-Peer Communication | Encrypted direct communication |
| 🔔 Instant Notifications | Real-time updates and alerts |
| ✅ Chat After Application Approval | Messaging enabled after recruiter approval |

---

# 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-13AA52?style=flat-square&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square) ![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-13AA52?style=flat-square&logo=mongodb&logoColor=white) |
| **Authentication** | ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) ![Express Session](https://img.shields.io/badge/Express_Session-000000?style=flat-square&logo=express&logoColor=white) |
| **Real-Time** | ![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat-square&logo=socketdotio&logoColor=white) ![WebRTC](https://img.shields.io/badge/WebRTC-333333?style=flat-square&logo=webrtc&logoColor=white) |
| **File Upload** | ![Multer](https://img.shields.io/badge/Multer-FF6C37?style=flat-square) |
| **Email Service** | ![Nodemailer](https://img.shields.io/badge/Nodemailer-009639?style=flat-square&logo=gmail&logoColor=white) |
| **Development Tools** | ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white) |
| **Version Control** | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) |

---

# 🏗️ System Architecture

<p align="center">
  <img src="Images/System architech.jpeg" alt="KaajKhojo System Architecture" width="100%">
</p>

---

# 📁 Project Structure

```text
KaajKhojo/

├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── socket/
│   ├── uploads/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
│
├── package.json
├── README.md
└── .gitignore
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/jyoti1900/KaajKhojo.git

cd KaajKhojo
```

## Install Backend

```bash
cd backend

npm install
```

## Install Frontend

```bash
cd ../frontend

npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend directory.

```env
# Server
PORT=8080
NODE_ENV=development

# Database
MONGO_URI=your_mongodb_connection_string

# Authentication
SESSION_SECRET=your_session_secret
JWT_SECRET=your_jwt_secret

# Admin
ADMIN_EMAIL=admin@kaajkhojo.com
ADMIN_PASSWORD=your_admin_password

# SMTP
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GOOGLE_SIGNUP_CALLBACK=http://localhost:8080/api/v1/auth/google/signup/callback
GOOGLE_LOGIN_CALLBACK=http://localhost:8080/api/v1/auth/google/login/callback

# Frontend
CLIENT_URL=http://localhost:3000
```

---

# ▶ Running Locally

### Backend

```bash
cd backend

npm start
```

### Frontend

```bash
cd frontend

npm start
```

Application runs at:

```
Frontend : http://localhost:3000

Backend : http://localhost:8080
```

---

# 🔐 Authentication & Security

| Security Feature | Description |
|------------------|-------------|
| 🔑 JWT Authentication | Secure user authentication using JSON Web Tokens |
| 🛡 Express Sessions | Session management for authenticated users |
| 👥 Role-Based Authorization | Access control for Admin, Recruiter, and Job Seeker |
| 🔒 Protected API Routes | Restricts unauthorized API access |
| 🔐 Password Hashing | Encrypts user passwords before storage |
| ✅ Input Validation | Validates incoming user data |
| 📂 Secure File Uploads | Safely uploads resumes and documents |
| ⚙ Environment Variable Protection | Secures sensitive application credentials |

# 📦 API Modules

| Module | Description |
|--------|-------------|
| 🔐 Authentication | User registration, login, JWT, and session management |
| 👤 Users | User profile and account management |
| 🏢 Recruiters | Recruiter profiles and company management |
| 💼 Jobs | Job creation, updates, and listings |
| 📄 Applications | Job application submission and tracking |
| 📎 Resume Upload | Resume upload and document management |
| 💬 Chat | Real-time recruiter–candidate messaging |
| 🎥 Video Interview | WebRTC-based online interviews |
| 📊 Admin Dashboard | Platform monitoring and management |

# ⚡ Performance Optimizations

| Optimization | Benefit |
|-------------|---------|
| 🏗 Modular MVC Architecture | Improves maintainability and scalability |
| 🔗 RESTful API Design | Efficient and standardized API communication |
| 🍃 MongoDB Query Optimization | Faster database performance |
| ⚡ Efficient Socket.IO Handling | Low-latency real-time communication |
| 🚀 Lazy Component Loading | Faster initial page load |
| ⚛ Optimized React Rendering | Reduces unnecessary re-renders |
| ☁️ Scalable Backend Structure | Supports increasing user traffic |

# 🧪 Experimental Results

| Result | Impact |
|--------|--------|
| 💬 Faster Recruiter Response | Improved communication through real-time chat |
| 🎥 Integrated Video Interviews | Reduced reliance on third-party meeting tools |
| 📈 Higher Candidate Engagement | Better interaction with recruiters |
| ☁️ Scalable Architecture | Supports multiple concurrent users |
| 📋 Centralized Workflow | Simplified recruitment management |

# 🚧 Challenges Faced

| Challenge | Solution |
|-----------|----------|
| 🎥 WebRTC Peer-to-Peer Communication | Implemented browser-based video calling |
| 🔄 Socket.IO Synchronization | Managed real-time communication across users |
| 🔐 Role-Based Route Protection | Secured APIs based on user roles |
| 📎 Secure Resume Uploads | Implemented protected file upload handling |
| 🔗 Workflow Integration | Connected chat and interviews with job applications |

# 🚀 Future Enhancements

| Feature | Description |
|---------|-------------|
| 🤖 AI Job Recommendation | Personalized job suggestions |
| 📧 Email Notifications | Automated email updates |
| 🔔 Push Notifications | Real-time browser notifications |
| 📊 Analytics Dashboard | Recruitment insights and reporting |
| 📅 Interview Scheduling | Built-in interview planner |
| 🐳 Docker & Kubernetes | Container orchestration and scalability |
| ⚙ CI/CD Pipeline | Automated build, testing, and deployment |

---

# 👨‍💻 Development Team

| Team Member | Contribution |
|------------|-------------|
| **Jyotipriya Das** | Project Lead, Backend Development, API Design, Database Architecture |
| **Sayan Pal** | Frontend Development, Testing, Debugging |
| **Indrajit Sahu** | User & Recruiter Frontend Modules |
| **Hasanoor Zaman** | Admin Dashboard Development |

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📜 Conclusion

KaajKhojo demonstrates the development of a modern recruitment platform that combines secure authentication, intelligent job management, real-time communication, and browser-based video interviews into a unified ecosystem. Its modular architecture, scalable backend, and responsive frontend make it suitable for real-world recruitment workflows and future enterprise enhancements.

---

# 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

⭐ If you found this project useful, consider giving it a **Star** on GitHub!


</div>
