# 🚀 Nexus Freelance Portal

<div align="center">

![Nexus Portal](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**A Modern Job Portal Platform for Students, Professors, and Administrators**

[Features](#-features) • [Tech Stack](#️-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [API Documentation](#-api-documentation)

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About the Project

**Nexus Freelance Portal** is a comprehensive job portal platform designed specifically for educational institutions. It connects students seeking freelance opportunities with professors posting jobs, all managed by administrators. This platform streamlines the job search and hiring process within academic environments.

### 🎓 Project Information
- **Type:** Group Project (7th Semester)
- **Purpose:** Academic Minor Project
- **Domain:** Job Portal / Freelance Platform

### 💡 Key Highlights

- **Role-Based Access Control:** Separate dashboards for Students, Professors, and Admins
- **Real-Time Communication:** Socket.IO integration for instant messaging
- **Email Notifications:** Automated job alerts and application updates
- **Secure Authentication:** JWT-based authentication with password encryption
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Modern UI/UX:** Smooth animations and intuitive navigation

---

## ✨ Features

### 👨‍🎓 For Students
- ✅ Browse and search freelance opportunities by category
- ✅ Apply for jobs with custom cover letters
- ✅ Track application status in real-time
- ✅ View application history and manage profile
- ✅ Receive job alert notifications via email
- ✅ Filter jobs by location, salary, and category
- ✅ Real-time messaging with employers

### 👨‍🏫 For Professors
- ✅ Post new job opportunities
- ✅ Manage posted jobs (edit/delete)
- ✅ Review student applications
- ✅ Accept or reject applications
- ✅ View applicant profiles and details
- ✅ Communicate with applicants via messaging

### 👨‍💼 For Admins
- ✅ Complete platform oversight
- ✅ Manage users (Students, Professors)
- ✅ Monitor all job postings
- ✅ Review and moderate applications
- ✅ Generate reports and analytics
- ✅ Manage categories and system settings

### 🔐 Security Features
- Secure password hashing with bcrypt
- JWT token-based authentication
- Protected routes and API endpoints
- Cookie-based session management
- Input validation and sanitization
- CORS configuration for secure API access

### 📧 Email System
- Welcome emails for new users
- Job application confirmations
- Application status updates
- Job alert notifications
- Password reset functionality

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.9.2-764ABC?style=flat-square&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.4-646CFF?style=flat-square&logo=vite&logoColor=white)

- **React 18.2** - UI library
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **React Icons** - Icon library
- **React Hot Toast** - Notifications
- **Swiper** - Touch slider
- **Lenis** - Smooth scrolling
- **Socket.IO Client** - Real-time communication

### Backend
![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18.2-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-8.0.3-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4.8.1-010101?style=flat-square&logo=socket.io&logoColor=white)

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **Nodemailer** - Email service
- **Socket.IO** - Real-time bidirectional communication
- **Cloudinary** - Image upload and management
- **Cookie Parser** - Cookie handling
- **CORS** - Cross-origin resource sharing
- **Validator** - Input validation

### Development Tools
- **Nodemon** - Auto-restart server
- **Concurrently** - Run multiple commands
- **ESLint** - Code linting
- **Vercel** - Deployment platform

---

## 📁 Project Structure

```
Job_Portal_Plateform/
│
├── backend/                      # Backend application
│   ├── config/
│   │   └── config.env           # Environment variables
│   ├── controllers/              # Request handlers
│   │   ├── adminController.js
│   │   ├── applicationController.js
│   │   ├── jobController.js
│   │   └── userController.js
│   ├── database/
│   │   └── dbConnection.js      # MongoDB connection
│   ├── middlewares/              # Custom middleware
│   │   ├── auth.js              # JWT authentication
│   │   ├── catchAsyncError.js   # Error wrapper
│   │   └── error.js             # Error handler
│   ├── models/                   # Mongoose schemas
│   │   ├── applicationSchema.js
│   │   ├── jobSchema.js
│   │   └── userSchema.js
│   ├── nodemailer/               # Email configuration
│   │   ├── Email.confiq.js
│   │   ├── Email.js
│   │   ├── EmailTemplate.js
│   │   └── JobAlertTemplate.js
│   ├── routes/                   # API routes
│   │   ├── adminRoutes.js
│   │   ├── applicationRoutes.js
│   │   ├── jobRoutes.js
│   │   └── userRoutes.js
│   ├── utils/
│   │   └── jwtToken.js          # JWT utility functions
│   ├── app.js                    # Express app setup
│   ├── server.js                 # Server entry point
│   ├── package.json
│   └── vercel.json              # Vercel deployment config
│
├── frontend/                     # Frontend application
│   ├── public/
│   │   ├── assets/              # Static assets
│   │   └── icons/               # Icon files
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── common/          # Reusable components
│   │   │   └── core/            # Feature components
│   │   ├── data/                # Static data files
│   │   ├── hooks/               # Custom React hooks
│   │   ├── pages/               # Page components
│   │   ├── reducer/             # Redux reducers
│   │   ├── services/            # API services
│   │   │   ├── operations/     # API operations
│   │   │   ├── apiConnector.jsx
│   │   │   └── apis.jsx
│   │   ├── slices/              # Redux slices
│   │   ├── App.jsx              # Main app component
│   │   └── index.jsx            # Entry point
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js       # Tailwind configuration
│   └── vite.config.js           # Vite configuration
│
└── README.md                     # Project documentation
```

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas account)
- **Git**

### Step 1: Clone the Repository

```bash
git clone https://github.com/Ankitkrjha32/Nexus-Freelance-Portal.git
cd Job_Portal_Plateform
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create config.env file in config folder
# (See Environment Variables section below)

# Start the backend server
npm run dev
```

The backend server will run on `http://localhost:4000`

### Step 3: Frontend Setup

```bash
# Open a new terminal
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend application will run on `http://localhost:3000`

### Step 4: Run Both Concurrently (Optional)

```bash
# From the frontend directory
npm run dev
```

This command will start both frontend and backend servers simultaneously.

---

## 🔐 Environment Variables

### Backend Configuration

Create a `config.env` file in the `backend/config/` directory with the following variables:

```env
# Server Configuration
PORT=4000
FRONTEND_URL=http://localhost:3000

# Database Configuration
MONGO_URI=your_mongodb_connection_string

# JWT Configuration
JWT_SECRET_KEY=your_jwt_secret_key
JWT_EXPIRE=7d

# Cookie Configuration
COOKIE_EXPIRE=7

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLIENT_NAME=your_cloudinary_name
CLOUDINARY_CLIENT_API=your_cloudinary_api_key
CLOUDINARY_CLIENT_SECRET=your_cloudinary_api_secret

# Email Configuration (Nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
```

### Frontend Configuration

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_BASE_URL=http://localhost:4000/api/v1
VITE_SOCKET_URL=http://localhost:4000
```

### 📝 Important Notes:
- Never commit `.env` or `config.env` files to version control
- Use strong, unique values for JWT_SECRET_KEY
- For Gmail, enable "Less secure app access" or use App Passwords
- MongoDB Atlas connection string format: `mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>`

---

## 💻 Usage

### User Registration & Login

1. **Sign Up:** Navigate to `/signup` and register as a Student, Professor, or Admin
2. **Login:** Use your credentials at `/login`
3. **Profile:** Complete your profile information

### For Students

1. **Browse Jobs:** Visit the homepage to see available opportunities
2. **Search & Filter:** Use search and category filters to find relevant jobs
3. **Apply:** Click on a job and submit your application with a cover letter
4. **Track Applications:** View all your applications in "My Applications"
5. **Messaging:** Communicate with employers through the messaging system

### For Professors

1. **Post a Job:** Navigate to "Post Job" and fill in the details
2. **Manage Jobs:** View and edit your posted jobs in "My Posted Jobs"
3. **Review Applications:** Check applications received for your jobs
4. **Accept/Reject:** Process applications and notify applicants
5. **Communication:** Message with applicants directly

### For Admins

1. **Dashboard:** Access the admin dashboard for overview
2. **User Management:** View and manage all users
3. **Job Moderation:** Monitor and manage all job postings
4. **Application Oversight:** Review all applications across the platform
5. **System Settings:** Configure categories and platform settings

---

## 📚 API Documentation

### Base URL
```
http://localhost:4000/api/v1
```

### Authentication Endpoints

#### Register User
```http
POST /user/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": 1234567890,
  "password": "password123",
  "role": "Student",
  "branch": "cse",
  "year": 3
}
```

#### Login User
```http
POST /user/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Logout User
```http
GET /user/logout
Authorization: Bearer <token>
```

#### Get User Profile
```http
GET /user/profile
Authorization: Bearer <token>
```

### Job Endpoints

#### Get All Jobs
```http
GET /job/getall
```

#### Get Job by ID
```http
GET /job/:id
```

#### Post a Job (Professor/Admin only)
```http
POST /job/post
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Web Developer",
  "description": "Looking for a web developer...",
  "category": "Web Development",
  "country": "India",
  "city": "Mumbai",
  "location": "Remote",
  "fixedSalary": 50000
}
```

#### Update Job
```http
PUT /job/update/:id
Authorization: Bearer <token>
```

#### Delete Job
```http
DELETE /job/delete/:id
Authorization: Bearer <token>
```

### Application Endpoints

#### Submit Application
```http
POST /application/apply/:jobId
Authorization: Bearer <token>
Content-Type: application/json

{
  "coverLetter": "I am interested in this position..."
}
```

#### Get My Applications (Student)
```http
GET /application/student/getall
Authorization: Bearer <token>
```

#### Get Applications for Job (Professor)
```http
GET /application/professor/getall
Authorization: Bearer <token>
```

#### Update Application Status
```http
PUT /application/update/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "accepted"
}
```

### Admin Endpoints

#### Get All Users
```http
GET /admin/users
Authorization: Bearer <token>
```

#### Get All Jobs (Admin)
```http
GET /admin/jobs
Authorization: Bearer <token>
```

#### Delete User
```http
DELETE /admin/user/:id
Authorization: Bearer <token>
```

### Response Format

#### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {...}
}
```

#### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error information"
}
```

---

## 📸 Screenshots

### Homepage
*Browse featured jobs and categories*

### Job Listing
*Filter and search through available opportunities*

### Job Details
*View detailed job information and apply*

### User Dashboard
*Manage your profile, applications, and posted jobs*

### Messaging System
*Real-time communication between students and professors*

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Follow existing code style and conventions
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📋 Future Enhancements

- [ ] Advanced search with AI-powered recommendations
- [ ] Video interview integration
- [ ] Payment gateway for premium features
- [ ] Rating and review system
- [ ] Mobile application (React Native)
- [ ] Resume parser and builder
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Social media integration
- [ ] Automated job matching algorithm

---

## 🐛 Known Issues

- Socket.IO occasionally requires reconnection on network changes
- Image uploads may timeout on slow connections
- Email delivery may be delayed during high traffic

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team Members

This project was developed as a collaborative effort for the 7th Semester Minor Project.

- 

---

## 📞 Contact

**Project Link:** [https://github.com/Ankitkrjha32/Nexus-Freelance-Portal](https://github.com/Ankitkrjha32/Nexus-Freelance-Portal)

For any queries or support, please reach out through GitHub issues or contact the development team.

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Socket.IO](https://socket.io/)
- [Node.js](https://nodejs.org/)
- All open-source contributors

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ by the Nexus Team  Ankit Kumar Jha**

</div>
