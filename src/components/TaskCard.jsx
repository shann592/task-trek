import React from 'react'
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'
import './TaskCard.css'

const TaskCard = ({ task }) => {
  return (
    <article className="task-card">
      <p className="task-text">{task.task}</p>
      <div className="card-bottom">
        <div className="card-tags">
          {task.tags.map((tag, index) => (
            <Tag tagName={tag} key={index} />
          ))}
        </div>
        <div className="delete-wrapper">
          <img src={deleteIcon} className="delete-icon" />
        </div>
      </div>
    </article>
  )
}

export default TaskCard
