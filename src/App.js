import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import shortid from 'shortid';

function App() {
  const [theme, setTheme] = useState('light')
  const [task, setTask] =useState({
    id:'',
    name:'',
    time:'',
    isEditable: false,
    isCompleted: false
  })
  const [taskList, setTaskList] = useState([])

  const handleThemeChange=(themeName)=>{
    setTheme(themeName)
  }

  const handleChange= (e)=>{
    const currentdate = new Date()
    const datetime= currentdate.toLocaleString()
    setTask((prevTask=>({
      ...prevTask,
      id:prevTask.isEditable ? prevTask.id : shortid.generate(),
      name:e.target.value,
      time:datetime
    })))
  }

  const addTask=(e)=>{
    e.preventDefault()
    if (!task.name.trim()) {
      alert('Enter a task')
      return;
    }
   if(task.isEditable){
      const updatedTask=taskList.map(item=>
        item.id===task.id ? {...item, name:task.name, time:task.time} : item
    )
      setTaskList(updatedTask);
   }else{
    setTaskList([
      task,
      ...taskList
    ])
   }
   setTask({
    id: '',
    name: '',
    time: '',
    isEditable: false,
    isCompleted:false
  });
   
  }

  const editTask=(id)=>{
    const editableTask=taskList.find(task => task.id===id)
    setTask({
      ...editableTask,
      isEditable:true
    });
  }
  const deleteTask =(id)=>{
      const newTaskList=taskList.filter(task => task.id !==id)
      setTaskList(newTaskList);
  }
  const deleteAllTask =()=>{
      setTaskList([]);
  }

  const toggleCompleted = (id)=>{
      const completedTask = taskList.map(item=>
        item.id === id ? {...item, isCompleted: !item.isCompleted} : item
      )
      setTaskList(completedTask);
  }
  return (
    <div className={`App ${theme}`}>
      <Header handleThemeChange={handleThemeChange} theme={theme} />
      <AddTask handleChange={handleChange} task={task} addTask={addTask} />
      <ShowTask taskList={taskList} deleteTask={deleteTask} editTask={editTask} deleteAllTask={deleteAllTask} toggleCompleted={toggleCompleted}/>
    </div>
  );
}

export default App;
