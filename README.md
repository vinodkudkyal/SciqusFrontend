# Sciqus Dashboard - Enterprise React Frontend

![React](https://img.shields.io/badge/React-19.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-B73C96?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A high-performance, responsive Single Page Application (SPA) dashboard built for scalability. This project demonstrates advanced frontend architecture, implementing a complex 12-column grid system that adapts seamlessly from desktop to mobile environments. It features a correlated design system where navigation, headers, and content modules share a unified visual identity.

---

## 🚀 Live Demo

**[View Live Dashboard](https://sciqusfrontend.onrender.com/)** *(Replace with your actual deployment link once active)*

---

## 📋 Table of Contents

1.  [Project Overview](#-project-overview)
2.  [Key Features](#-key-features)
3.  [Architecture & Layout](#-architecture--layout)
4.  [Technology Stack](#-technology-stack)
5.  [Installation & Setup](#-installation--setup)
6.  [File Structure](#-file-structure)
7.  [Component Documentation](#-component-documentation)
8.  [Deployment Guide](#-deployment-guide)

---

## 🔍 Project Overview

This dashboard was engineered to meet strict design specifications requiring a **fluid responsive layout**.

* **Desktop Experience:** A pinned sidebar navigation with a 12-column grid layout for content modules. The sidebar is fixed, allowing the main content to scroll independently.
* **Mobile Experience:** A single-column stacked layout with a collapsible hamburger menu and slide-over sidebar overlay.
* **Design System:** Uses a consistent "Indigo & Slate" color theme (`slate-900` for navigation, `indigo-600` for primary actions) to convey a professional, enterprise-grade aesthetic.

---

## ✨ Key Features

### 🖥️ Responsive Interface
* **Adaptive Grid:** Content blocks span 3, 4, or 5 columns on desktop and stack vertically (1 column) on mobile.
* **Fixed Sidebar:** The sidebar remains visible on the left for desktops, ensuring easy navigation without scrolling back to the top.
* **Mobile Menu:** A touch-friendly hamburger menu (`<Header />`) toggles the sidebar with a backdrop blur effect.

### ⚡ Interactive Modules
* **View Switcher:** Clicking sidebar items (Dashboard, Team, Settings) dynamically swaps the main view without page reloads.
* **Data Visualization:** Custom CSS-based area charts and bar graphs in the Analytics module.
* **Modal & Slide-overs:** The "Projects" module features a **New Project Modal** and a **View Details Slide-over panel** for deeper context.
* **Tabbed Interfaces:** The "Settings" page uses vertical tabs to switch between Profile, Security, Notifications, and Billing.

### 🎨 Visual Polish
* **Dark Mode Analytics:** A distinct "Command Center" look for the Analytics page.
* **Micro-interactions:** Hover effects, smooth transitions (`duration-300`), and active state highlighting.
* **Realistic Data:** All components are populated with rich, realistic mock data (avatars, dates, financial figures).

---

## 🏢 Architecture & Layout

The app is wrapped in a `MainLayout` component that manages the global state for the sidebar and page navigation.

### **Desktop Layout (Grid System)**
Based on the provided wireframe, the Dashboard view uses a **12-column grid**:

| Row | Component | Width (Cols) | Content Type |
| :--- | :--- | :--- | :--- |
| **1** | `Container1` | **5** | **Hero Carousel:** Welcome card with CTA. |
| **1** | `Container2` | **3** | **Live Feed:** System updates list. |
| **1** | `Container3` | **4** | **Team Slider:** Profile spotlight. |
| **2** | `Container4` | **4** | **Stats:** 2x2 Data grid. |
| **2** | `Container5` | **4** | **Action:** Pending tasks (Approve/Reject). |
| **2** | `Container6` | **4** | **Events:** Animated schedule slider. |

---

## 🛠 Technology Stack

* **Core:** [React 19](https://react.dev/) (via Vite)
* **Styling:** [Tailwind CSS v3.4](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/) (Feather icons)
* **Avatars:** [DiceBear API](https://www.dicebear.com/) (Procedural avatars)
* **Routing:** Custom State-based Routing (SPA)
* **Deployment:** Configured for Render / GitHub Pages

---

## 💻 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/vinodkudkyal/Sciqus-Frontend.git](https://github.com/vinodkudkyal/Sciqus-Frontend.git)
    cd Sciqus-Frontend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the local development server**
    ```bash
    npm run dev
    ```
    Access the app at `http://localhost:5173`.

4.  **Build for production**
    ```bash
    npm run build
    ```

---

## 📂 File Structure

```text
src/
├── components/
│   ├── Header.jsx          # Top bar (Search, Profile, Mobile Toggle)
│   ├── Sidebar.jsx         # Fixed Left Navigation
│   ├── Dashboard.jsx       # Main Dashboard Grid View
│   ├── Analytics.jsx       # Dark-themed Data Page
│   ├── Team.jsx            # Directory / List View
│   ├── Projects.jsx        # Kanban-style Projects with Modals
│   ├── Settings.jsx        # Profile/Billing with Tabs
│   ├── Support.jsx         # FAQ & Help Center
│   ├── LiveFeed.jsx        # Activity Stream Page
│   ├── Container1-6.jsx    # Individual Dashboard Widgets
│   └── ...
├── layouts/
│   └── MainLayout.jsx      # Global Layout Wrapper & State Manager
├── App.jsx                 # Application Entry
├── main.jsx                # DOM Renderer
└── index.css               # Tailwind Directives