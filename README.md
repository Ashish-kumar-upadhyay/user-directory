# Create an eye-catching README.md file for the User Directory project

import pypandoc

readme_content = """
# 🌍 User Directory App

A simple and clean React application built using **Vite** that fetches user data from a public API and displays it in a responsive card layout.

---

## 🚀 Live Features

- Fetches data from a public API
- Displays users in a clean UI
- Handles loading state
- Handles error state
- Fully responsive design
- Simple and readable code structure

---

## 🛠 Tech Stack

- React (Hooks)
- Vite
- JavaScript (ES6+)
- CSS Grid
- Fetch API

---

## 📂 Project Structure

src/
 ├── App.jsx
 ├── App.css
 ├── main.jsx
 └── index.css

---

## ⚙️ How It Works

1. useEffect runs when the component loads.
2. An async function fetches data from JSONPlaceholder API.
3. While fetching, a loading message is shown.
4. If API fails, an error message is displayed.
5. After success, user cards are rendered using map().
6. CSS Grid ensures responsive layout.

---

## 📱 Responsive Design

The layout uses:

grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

This allows cards to adjust automatically based on screen size.

---

## 📦 Installation & Setup

1. Clone the repository
2. Run:

npm install  
npm run dev  

3. Open browser at:
http://localhost:5173

---

## 💡 Possible Improvements

- Add search functionality
- Add pagination
- Create reusable UserCard component
- Use Axios instead of fetch
- Add dark mode

---

## 🎯 Purpose

This project demonstrates:
- API integration
- State management
- Conditional rendering
- Clean UI design
- Responsive layout using CSS Grid

---

Made with simplicity and clarity for interview preparation.
"""

file_path = "/mnt/data/README_User_Directory.md"

pypandoc.convert_text(
    readme_content,
    'md',
    format='md',
    outputfile=file_path,
    extra_args=['--standalone']
)

file_path
