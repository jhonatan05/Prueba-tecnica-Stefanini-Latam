import React from 'react'
import './Task.scss'

interface DeleteButtonsProps {
  title: string
  id: number
  description: string
  handleclick: (id: number) => void
}

const Task = ({ title, id, description, handleclick }: DeleteButtonsProps) => {
  return (
    <div className="common-button">
      <button onClick={() => handleclick(id)} className="common-button__delete">
        Eliminar
      </button>
      <span className="common-index"> {id}</span>
      <span className="common-button__title">{title}</span>
      <span className="common-button__description">{description}</span>
    </div>
  )
}

export default Task
