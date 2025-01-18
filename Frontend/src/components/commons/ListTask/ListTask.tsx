import React, {  useEffect, useState } from 'react'
import Task from '../task/Task'
import { useNavigate } from 'react-router-dom'
import './ListTask.scss'

const ListTask = (): any => {
  const navigate = useNavigate()
  const [task, setTask] = useState([])
  useEffect(() => {
    const listTask = fetch(`http://localhost:8080/tasks`)
    listTask.then((resp) => {
      resp.json().then((data) => {
        setTask(data)
      })
    })
  }, [])

  const handleClick = (id: number) => {
    navigate('/')
    const listTask = fetch(`http://localhost:8080/task/${id}`, {
      method: 'DELETE',
    })

    listTask.then((resp) => {
      resp.json().then((data) => {
        setTask(data)
      })
    })
  }

  return (
    <div className='ListTask'>
      <div className='ListTask__colums'>
        <span>Id</span>
        <span>Titulo</span>
        <span>Descripcion</span>
        <span>Fecha</span> 
        <span>Eliminar</span>
      </div>
      <div className="scroll-container">
      {task.map((list) => {
        const { id, title, description } = list
        return <Task title={title} id={id} description={description} handleclick={handleClick} />
      })}
      </div>
    </div>
  )
}

export default ListTask
