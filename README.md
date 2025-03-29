
# **Code-Genie**  
Code-Genie is an interactive AI tutor designed to enhance coding efficiency and learning. It provides real-time coding assistance, debugging support, and syntax explanations through an intuitive chat-based interface. The application leverages OpenAI’s API to generate precise coding suggestions and explanations, making it a powerful tool for both beginners and experienced developers. 🚀

## **Project Overview**  
Code-Genie is an AI-powered coding tutor that assists developers with intelligent code suggestions, debugging help, and real-time learning support using OpenAI's API.

### **Key Features**  
- **AI-Powered Tutoring**: Uses OpenAI API to generate responses for code-related queries.  
- **User Authentication**: Secure login and registration system.  
- **Interactive Chat**: Allows users to communicate with the AI tutor in real-time.  
- **Profile Management**: Users can update their details securely.  
- **Responsive UI**: Designed for seamless use across devices.  

---

## **Explanation of the Main Files**  

### **Backend**  
- **`code-genie-backend/index.js`**: Entry point for the backend server. Configures middleware, API routes, and connects to the database.  
- **`code-genie-backend/routes/Routes.js`**: Defines API routes for authentication and AI-powered chat functions.  
- **`code-genie-backend/models/User.js`**: Mongoose schema for storing user authentication details.  
- **`code-genie-backend/controllers/userController.js`**: Handles authentication and user-related logic.  
- **`code-genie-backend/middleware/verifyJWT.js`**: Middleware for verifying JWT tokens to protect routes.  

### **API Integration**  
- **`code-genie-api/code_genie.py`**: Python script interacting with OpenAI API to generate responses for user queries.  

### **Frontend**  
- **`code-genie-frontend/src/components/`**: Contains all React components.  
  - **`App.jsx`**: Main application component managing routes.  
  - **`AuthProvider.jsx`**: Context provider for managing authentication state.  
  - **`ChatPage.jsx`**: Main interface where users interact with the AI tutor.  
  - **`Login.jsx`**: User login page handling authentication.  
  - **`Register.jsx`**: User registration page for creating accounts.  
  - **`EditProfile.jsx`**: Component for updating user profile details.  
  - **`ChangePassword.jsx`**: Allows users to securely update their passwords.  
  - **`ProtectedLayout.jsx`**: Ensures authentication before allowing access to certain pages.  

- **`code-genie-frontend/src/assets/`**: Contains images and styles used in the application.  
- **`code-genie-frontend/src/config.js`**: Stores API base URL for both development and production environments.  

---

## **Steps to Set Up and Run the Application**  

### **Prerequisites**  
Ensure you have the following installed:  
- **Node.js (v14+ recommended)**  
- **MongoDB (local or hosted)**  
- **Python 3+**  

### **1. Clone the Repository**  
```sh
git clone https://github.dev/nani2916/code_genie
cd code_genie
```

### **2. Front-end Setup**  
Open a terminal and enter the following commands:


```sh
cd code-genie-frontend
npm install
```

### **2. Back-end Setup**  
Create a config.js file in the code-genie-backend root directory and add the following variables:

```sh
export const MONGODB_URL = "<Your MongoDB connection string>"
export const JWT_SECRET = "<Your JWT secret key>"
export const EMAIL_USER = "<Your email username>"
export const EMAIL_PASS = "<Your email password>"
export const CLIENT_ID = "<Your Google OAuth client ID>"
export const CLIENT_SECRET = "<Your Google OAuth client secret>"
export const REFRESH_TOKEN = "<Your Google OAuth refresh token>"
export const REDIRECT_URI = "<Your OAuth redirect URI>"

```

Open a terminal and enter the following commands:

```sh
cd code-genie-backend
npm install
```


### **3. API Setup**  
Create a config.py file in the code-genie-api root directory and add the following variable:

```sh
OPEN_API_KEY="<Your OpenAPI Key>"
```

### 4. Start the Application

Open a terminal and enter the following commands in seperate terminal:

Terminal 1:

```sh
cd code-genie-frontend
npm start
```

<hr style="border: 0.1px solid #ccc;">

Open a separate terminal and run the following commands:

Terminal 2:

```sh
cd code-genie-backend
npm start
```

<hr style="border: 0.1px solid #ccc;">

Open a separate terminal and run the following commands:

Terminal 3:

```sh
python code-genie.py
```

### 5. Access the Application
Once both the frontend, backend and flask servers are running, open your browser and visit:

```sh
http://localhost:3000
```
---

## **Dependencies and Prerequisites**

### **Backend**
- **`Node.js`**: JavaScript runtime for server-side logic.
- **`Express.js`**: Web framework for handling API requests.
- **`MongoDB`**: Database for storing user and session data.
- **`Mongoose`**: ODM for MongoDB to interact with the database efficiently.
- **`JWT`**: Authentication via JSON Web Tokens.

### **API**
- **`Python`**: Used for AI model integration.
- **`OpenAI API`**: Provides AI-powered responses for tutoring assistance.

### **Frontend**
- **`React.js`**: Frontend framework for building the user interface.
- **`Tailwind CSS`**: Styling framework for a responsive and modern design.



