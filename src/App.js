import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import shortid from 'shortid';

function App() {
  const [theme, setTheme] = useState('light')
  const [task, setTask] =useState('')
  const [taskList, setTaskList] = useState([])

  const handleThemeChange=(themeName)=>{
    setTheme(themeName)
  }

  const handleChange= (e)=>{
    setTask(e.target.value)
  }

  const addTask=(e)=>{
    e.preventDefault()
    const currentdate = new Date()
    const datetime= currentdate.toLocaleString()

    setTaskList([
      {
        id:shortid.generate(),
        name:task,
        time:datetime
      },
      ...taskList
    ])
  }
  const editTask=(id)=>{

  }
  const deleteTask =(id)=>{
      const newTaskList=taskList.filter(task => task.id !==id)
      setTaskList(newTaskList);
  }

  return (
    <div className={`App ${theme}`}>
      <Header handleThemeChange={handleThemeChange} theme={theme} />
      <AddTask handleChange={handleChange} task={task} addTask={addTask} />
      <ShowTask taskList={taskList} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;
