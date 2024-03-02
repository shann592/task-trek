import React, { useEffect, useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'
import TaskCard from './components/TaskCard'
const App = () => {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem('taskList')) || []
  )
  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList])
  return (
    <div className="main">
      <header>
        <TaskForm setTaskList={setTaskList} />
      </header>
      <div className="col-section">
        <h1 className="section-title">
          <img src={todoIcon} className="status-icon" /> todo
        </h1>
        <h1 className="section-title">
          <img src={doingIcon} className="status-icon" /> doing
        </h1>
        <h1 className="section-title">
          <img src={doneIcon} className="status-icon" /> done
        </h1>
      </div>
      <main>
        <section className="todo-section">
          {taskList.map((task, index) => {
            if (task.status === 'todo') {
              return <TaskCard key={index} task={task} />
            }
          })}
        </section>
        <section className="doing-section">
          {taskList.map((task, index) => {
            if (task.status === 'doing') {
              return <TaskCard key={index} task={task} />
            }
          })}
        </section>
        <section className="done-section">
          {taskList.map((task, index) => {
            if (task.status === 'done') {
              return <TaskCard key={index} task={task} />
            }
          })}
        </section>
      </main>
    </div>
  )
}

export default App
