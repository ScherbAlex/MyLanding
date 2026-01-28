<p align="right">
  <a href="#ru">🇷🇺 Русский</a> |
  <a href="#en">🇬🇧 English</a>
</p>

<a id="ru"></a>

# MyLandingReact — персональный landing / portfolio 🚀

**Современный personal landing / portfolio сайт**, разработанный на **React + Vite**,  
предназначен для демонстрации проектов, стека технологий и контактов разработчика.

Сайт используется как **витрина GitHub-проектов** и развернут на **GitHub Pages**.

🔗 **Live demo:**  
👉 https://scherbalex.github.io/MyLandingReact/

---

## 🏷️ Стек и технологии

![React](https://img.shields.io/badge/React-18+-61dafb)
![Vite](https://img.shields.io/badge/Vite-5+-646cff)
![Framer Motion](https://img.shields.io/badge/Animations-Framer_Motion-ff69b4)
![Router](https://img.shields.io/badge/Routing-React_Router_DOM-red)
![CSS](https://img.shields.io/badge/UI-Glassmorphism%20%7C%20Dark_Gradient-blueviolet)
![CI](https://img.shields.io/badge/CI-GitHub_Actions-black)
![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-success)

---

## ✨ Возможности

- 🌍 **Переключение языков RU / EN**
- 🎨 **Dark gradient + glassmorphism UI**
- 🎬 Анимации на **Framer Motion**
- 🧩 Отдельные страницы проектов
- 🔗 Кнопки перехода в GitHub-репозитории
- 📱 Адаптивная верстка
- 🚀 Автодеплой на GitHub Pages (CI)

---

## 🧠 Архитектура приложения

```mermaid
flowchart TD
    U[User / Browser] --> R[React App]
    R -->|Routing| RR[React Router]
    RR --> H[Home Page]
    RR --> P[Project Page]

    H --> C[Projects List]
    P --> D[Project Details]

    R --> FM[Framer Motion Animations]
    R --> UI[Glassmorphism UI]
```
    CI[GitHub Actions] -->|build| GH[GitHub Pages]
📁 Структура проекта  
mylandingreact/  
├── public/  
├── src/  
│   ├── pages/  
│   │   ├── Home.jsx  
│   │   └── Project.jsx   
│   ├── App.jsx  
│   ├── main.jsx  
│   └── App.css  
├── .github/workflows/  
│   └── deploy.yml  
├── vite.config.js  
├── package.json  
└── README.md    
⭐ Представленные проекты
Landing агрегирует реальные showcase-репозитории:  

OnlineStore — e-commerce backend (Django, DRF, PostgreSQL)  

OnlineLearning — платформа онлайн-обучения  

Message_AutoSend — email-рассылки и планирование  

AtomicHabits API — трекер привычек + фоновые задачи  

MyBank / ProjectBank — финтех и аналитика  

HH_Data / HH_Vacancies — анализ рынка вакансий  

Каждый проект:  

имеет отдельную страницу  

содержит краткое описание  

кнопку Open repo  

🚀 Локальный запуск  
npm install  
npm run dev  
Открыть:  
👉 http://localhost:5173/  

🚀 Деплой (GitHub Pages)  
Проект автоматически деплоится через GitHub Actions:  

push → main  
  ↓  
npm run build  
  ↓  
deploy-pages  
  ↓  
GitHub Pages  
Настройки:  

base: "/MyLandingReact/" в vite.config.js  

BrowserRouter basename={import.meta.env.BASE_URL}  

📌 Назначение проекта
Этот репозиторий создан как:  

🎯 персональный landing  
 
🧰 витрина GitHub-проектов  

💼 portfolio для рекрутеров  

🧪 playground для UI / анимаций / архитектуры  

📫 Контакты
GitHub: https://github.com/ScherbAlex

Telegram: @Alex_181173

Email: alexshcherbyna1173@gmail.com

<a id="en"></a>

MyLandingReact — personal landing / portfolio 🚀
A modern personal landing / portfolio website built with React + Vite,
designed to showcase projects, tech stack and developer contacts.

Used as a GitHub projects showcase and deployed via GitHub Pages.

🔗 Live demo:
👉 https://scherbalex.github.io/MyLandingReact/

✨ Features
🌍 RU / EN language switch

🎨 Dark gradient & glassmorphism UI

🎬 Framer Motion animations

🧩 Project pages

🔗 Direct GitHub repository links

📱 Responsive layout

🚀 CI/CD with GitHub Actions

🧠 Architecture
(see Mermaid diagram above)

🚀 Getting started
npm install
npm run dev
🚀 Deployment
Automated via GitHub Actions → GitHub Pages

📌 Purpose
This repository serves as:

Personal landing

Project showcase

Developer portfolio

UI / animation playground

