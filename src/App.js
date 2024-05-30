import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';

function App() {
  const [theme, setTheme] = useState('light')
  const handleThemeChange=(themeName)=>{
    setTheme(themeName)
  }

  return (
    <div className={`App ${theme}`}>
      <Header handleThemeChange={handleThemeChange} theme={theme} />
      <AddTask />
    </div>
  );
}

export default App;
