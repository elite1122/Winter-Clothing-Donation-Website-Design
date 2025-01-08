# Winter Clothing Donation Website Design Using Core React, Tailwind CSS and DaisyUI

## Overview 🌟
The Winter Clothing Donation Website connects donors with volunteers to provide winter clothing to those in need, especially vulnerable individuals in rural and low-income areas of Bangladesh. This platform makes it easy for users to donate clothing and support local communities during the colder months.

## 🛠️ Technologies Used
- **React.js** – Dynamic and efficient component-based UI framework for front-end building.
- **Tailwind CSS** – Utility-first CSS framework for a beautifully responsive and customizable interface.
- **DaisyUI** – A Tailwind CSS plugin for styled components and UI elements.
- **JavaScript** – Provides interactive functionality and core logic for the app.
- **React Toastify** – Delightful notifications and alerts for seamless user feedback.
- **React Router** - For handling navigation and routing across pages.
- **Context API** - For state management.
- **Firebase Authentication** - For user authentication via email/password and Google login.

## 📦 NPM Packages Used
- **react** – The main library for building the user interface.
- **tailwindcss** – A utility-first CSS framework to style the app.
- **daisyui** – A Tailwind CSS plugin that adds a set of styled components.
- **react-router-dom** – For routing and navigation between pages.
- **firebase** - For integrating Firebase authentication and hosting.
- **react-toastify** - For displaying notifications in the app.
- **react-icons** - To add icon support in the UI.
- **react-aos** - For adding animation effects on scroll.
- **dotenv** - To manage environment variables for sensitive information like Firebase keys.

## 📱 Key Features
### 🚀 Responsive Navbar
- **Description:** The Navbar is flexible, displaying the site's logo, navigation links (Home, Donation Campaigns, How to Help, Dashboard), and the user’s profile photo if logged in.
- **Responsive:** Ensures smooth navigation across all devices (mobile, tablet, desktop).

### ❤️ Donation Campaigns Page
- **Description:** Displays all active donation campaigns.
- **Features:** Includes campaign cards with an image, title, description, and division. The "Donate Now" button leads to the donation details page.

### 🤝 Donation Details Page (Private)

- **Description:** Accessible only after login, this page shows detailed information about a specific donation campaign.
- **Form Fields:** Users can fill in details about the donation (quantity, item type, pickup location, additional notes).
- **Toast Notification:** After submission, a toast message appears, thanking the user for their donation.

### 🔒 User Authentication
- **Login & Registration:** Users can register and log in via email/password or Google account.
- **Password Validation:** Ensures secure passwords (uppercase, lowercase, and minimum 6 characters).
- **Password Visibility Toggle:** Users can toggle password visibility during registration.

### 📊 Dashboard (Private)
- **Description:** Displays the user’s profile information, including name, email, and profile photo.
- **Update Profile:** Users can update their profile details (name, photo URL).

### ➕ Extra Features
- **404 Error Page:** Redirects users to a Not Found page if they visit an invalid route.
- **Forget Password:** Users can reset their password via email by clicking the "Forgot Password" link.
- **AOS Animation:** Adds animations to the homepage for better user engagement.

## ⚛️ React Fundamentals Used
- **Functional Components:** Used throughout the project to create reusable UI sections and components.
- **Hooks:** Implemented useState, useEffect, useContext, useNavigate, and useLocation to manage state and side effects.
- **Context API:** Used for global state management, including user authentication and donation data.
- **Conditional Rendering:** Displays content based on the user’s login status, active donation campaigns, and form submissions.

## 📝 Usage
- **Login/Logout:** Users must log in to access the Donation Details and Dashboard pages.
- **Donate:** On the Donation Campaigns page, users can select a campaign and fill out the donation form.
- **Dashboard:** After logging in, users can view and update their profile information.

## 💡 Extra Sections
- **About Us Section:** Describes the platform's mission and how users can contribute.
- **How It Works Section:** Provides information on how to donate, including collection points and supported divisions.

## 🔗 Dependencies
- @fortawesome/fontawesome-svg-core: ^6.7.0
- @fortawesome/free-brands-svg-icons: ^6.7.0
- @fortawesome/free-solid-svg-icons: ^6.7.0
- @fortawesome/react-fontawesome: ^0.2.2
- aos: ^2.3.4
- firebase: ^11.0.2
- react: ^18.3.1
- react-dom: ^18.3.1
- react-icons: ^5.3.0
- react-router-dom: ^6.28.0
- react-toastify: ^10.0.6

## Installation
- Run `npm install` to install project dependencies.

## 📣 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check out the issues page if you want to contribute.


## 🎉 Show Your Support
If you like this project, consider giving it a ⭐ on GitHub!

## 🌐 Live Demo
✨ **[Experience the Live Version Here!](https://winter-cloth-donation-auth.web.app)** ✨

## 📂 GitHub Repository
✨ **[Visit Repository!](https://github.com/elite1122/Winter-Clothing-Donation-Website-Design)** ✨
