import React from 'react'
import {
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
      <span className="Task__index"> {id}</span>
      <span className="Task__title">{title}</span>
      <span className="Task__description">{description}</span>
      <span>Fecha</span>
      <button onClick={() => handleclick(id)} className="Task__delete">
      <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  )
}

export default Task
