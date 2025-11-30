import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <h1>Переключатель тем</h1>
        <button onClick={toggleTheme} className="theme-button">
          {theme === 'light' ? '🌙 Тёмная' : '☀️ Светлая'}
        </button>
      </header>

      <main className="main">
        <div className="card">
          <h2>Текущая тема: {theme}</h2>
          <p>Это простое приложение для демонстрации переключения тем.</p>
          <button className="demo-btn">Пример кнопки</button>
          <input type="text" placeholder="Пример поля" className="demo-input" />
        </div>
      </main>
    </div>
  );
}

export default App;