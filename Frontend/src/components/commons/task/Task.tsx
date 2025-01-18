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
    <div className="Task">
      <button onClick={() => handleclick(id)} className="Task__delete">
        Eliminar
      </button>
      <span className="Task__index"> {id}</span>
      <span className="Task__title">{title}</span>
      <span className="Task__description">{description}</span>
      <span>Fecha</span>
    </div>
  )
}

export default Task
