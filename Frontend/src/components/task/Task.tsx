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
  createdAt: string
  handleclick: (id: number) => void
}

const Task = ({ title, id, description, createdAt, handleclick }: DeleteButtonsProps) => {

  return (
    <div className="task">
      <span className="task__index"> {id}</span>
      <span className="task__title">{title}</span>
      <span className="task__description">{description}</span>
      <span>{createdAt}</span>
      <button onClick={() => handleclick(id)} className="task__delete">
      <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  )
}

export default Task
