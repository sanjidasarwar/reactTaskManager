import { useState } from 'react';
import './App.css';
import Header from "./components/header";

function App() {
  const [theme, setTheme] = useState('light')
  const handleThemeChange=(themeName)=>{
    setTheme(themeName)
  }

  return (
    <div className={`App ${theme}`}>
      <Header handleThemeChange={handleThemeChange} theme={theme} />
    </div>
  );
}

export default App;
