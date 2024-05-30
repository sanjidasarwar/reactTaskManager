import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';

function App() {
  const [theme, setTheme] = useState('light')
  const [task, setTask] =useState()

  const handleThemeChange=(themeName)=>{
    setTheme(themeName)
  }
  const handleChange= (e)=>{
    setTask(e.target.value)
  }

  return (
    <div className={`App ${theme}`}>
      <Header handleThemeChange={handleThemeChange} theme={theme} />
      <AddTask handleChange={handleChange} task={task} />
    </div>
  );
}

export default App;
