# 🎯 Quiz App - Full Stack MERN Application

A modern, interactive quiz application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring beautiful UI/UX design and real-time quiz functionality.

## 🌟 Features

### 🎮 **User Features**
- **Category Selection**: Choose from multiple quiz categories
- **Interactive Quiz Interface**: Modern, responsive design with smooth animations
- **Real-time Scoring**: Instant feedback and score calculation
- **Results Dashboard**: Comprehensive results with detailed analytics
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### 🎨 **UI/UX Features**
- **Modern Design**: Beautiful gradient backgrounds and glass-morphism effects
- **Smooth Animations**: Engaging transitions and hover effects
- **Dark Theme**: Professional dark color scheme
- **Accessible**: High contrast colors and readable typography
- **Mobile-First**: Optimized for all screen sizes

## 🛠️ **Tech Stack**

### **Frontend**
- **React.js** - UI Library
- **Redux** - State Management
- **React Router** - Navigation
- **CSS3** - Modern styling with animations
- **Responsive Design** - Mobile-first approach

### **Backend**
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing

## 📁 **Project Structure**

```
quiz_app/
├── client/                 # React Frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── styles/        # CSS files
│   │   ├── hooks/         # Custom React hooks
│   │   ├── redux/         # State management
│   │   └── helper/        # Utility functions
│   └── package.json
├── server/                # Node.js Backend
│   ├── controllers/       # Route handlers
│   ├── database/          # DB connection & data
│   ├── models/            # MongoDB schemas
│   ├── router/            # API routes
│   └── package.json
└── README.md
```

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/shreyaillur14/quiz-app.git
   cd quiz-app
   ```

2. **Install Server Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Client Dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   Create a `.env` file in the server directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/quiz_app
   PORT=8080
   ```

5. **Start the Application**

   **Terminal 1 - Start Server:**
   ```bash
   cd server
   npm start
   ```

   **Terminal 2 - Start Client:**
   ```bash
   cd client
   npm start
   ```

6. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8080

## 📊 **API Endpoints**

### **Questions**
- `GET /api/questions` - Get all questions
- `GET /api/questions/:category` - Get questions by category
- `POST /api/questions` - Add new questions
- `DELETE /api/questions` - Delete all questions

### **Results**
- `GET /api/result` - Get all results
- `POST /api/result` - Store quiz result
- `DELETE /api/result` - Delete all results

## 🎯 **Key Components**

### **Frontend Components**
- `CategorySelection` - Quiz category selection page
- `Main` - Welcome page with rules and user input
- `Quiz` - Interactive quiz interface
- `Result` - Results display with analytics
- `ResultTable` - Detailed results table

### **Backend Features**
- RESTful API design
- MongoDB integration
- Error handling
- CORS configuration

## 🎨 **Design Highlights**

- **Modern UI**: Glass-morphism design with gradient backgrounds
- **Responsive Layout**: Works on all devices
- **Smooth Animations**: Engaging user interactions
- **Professional Typography**: Clean, readable fonts
- **Accessible Colors**: High contrast for better readability

## 🔧 **Development Features**

- **Component-based Architecture**: Reusable React components
- **State Management**: Redux for global state
- **Custom Hooks**: Reusable logic
- **Error Boundaries**: Graceful error handling
- **Code Organization**: Well-structured and maintainable

## 📱 **Screenshots**

*Add screenshots of your application here*

## 🤝 **Contributing**

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 **Author**

**Shreya Illur**
- GitHub: [@shreyaillur14](https://github.com/shreyaillur14)

## 🙏 **Acknowledgments**

- Built as part of Starlly Solution Internship training project
- Inspired by modern quiz applications
- Thanks to the open-source community

---

⭐ **If you found this project helpful, please give it a star!** ⭐
