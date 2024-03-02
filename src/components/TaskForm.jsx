import React, { useState } from 'react'
import './TaskForm.css'
import Tag from './Tag'

const TaskForm = ({ setTaskList }) => {
  const [taskData, setTaskData] = useState({
    task: '',
    status: 'todo',
    tags: [],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setTaskData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTaskList((prev) => {
      return [...prev, taskData]
    })
    setTaskData({
      task: '',
      status: 'todo',
      tags: [],
    })
  }

  const handleClick = (tagParam) => {
    if (taskData.tags.some((tag) => tagParam === tag)) {
      const newTags = taskData.tags.filter((tag) => tag !== tagParam)
      setTaskData((prev) => {
        return { ...prev, tags: newTags }
      })
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tagParam] }
      })
    }
  }

  const selectedTag = (tagName) => {
    return taskData.tags.some((tag) => tagName === tag)
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter your task"
        name="task"
        onChange={handleChange}
        value={taskData.task}
      />
      <div className="form-bottom">
        <div className="tags-wrapper">
          {['HTML', 'CSS', 'JavaScript', 'React'].map((tagName, index) => (
            <Tag
              tagName={tagName}
              key={index}
              handleClick={handleClick}
              selectedTag={selectedTag(tagName)}
            />
          ))}
        </div>
        <div className="options-btn">
          <select
            className="status"
            name="status"
            onChange={handleChange}
            value={taskData.status}
          >
            <option value="todo">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <button className="add-task">+Add Task</button>
        </div>
      </div>
    </form>
  )
}

export default TaskForm
