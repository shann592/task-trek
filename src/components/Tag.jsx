import React from 'react'
import './Tag.css'

const Tag = ({ tagName, handleClick, selectedTag }) => {
  return (
    <button
      type="button"
      className="tag"
      onClick={() => handleClick(tagName)}
      style={{ background: selectedTag && '#e9edc9' }}
    >
      {tagName}
    </button>
  )
}

export default Tag
