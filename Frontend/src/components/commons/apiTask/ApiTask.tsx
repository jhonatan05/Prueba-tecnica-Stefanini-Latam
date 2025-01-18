import React, { Fragment, useEffect, useState } from 'react'
import Task from '../task/Task'
import { useNavigate } from 'react-router-dom'

const ApiTask = (): any => {
  const navigate = useNavigate()
  const [task, setTask] = useState([])
  useEffect(() => {
    const taskApi = fetch(`http://localhost:8080/tasks`)
    taskApi.then((resp) => {
      resp.json().then((data) => {
        setTask(data)
      })
    })
  }, [])

  const handleClick = (id: number) => {
    navigate('/')
    const taskApi = fetch(`http://localhost:8080/task/${id}`, {
      method: 'DELETE',
    })

    taskApi.then((resp) => {
      resp.json().then((data) => {
        setTask(data)
        console.log(task)
      })
    })
  }

  return (
    <div style={{ background: 'white' }}>
      <div>
        <span>eliminar</span>
        <span>id</span>
        <span>titulo</span>
        <span>descripcion</span>
      </div>
      {task.map((button) => {
        const { id, title, description } = button
        return <Task title={title} id={id} description={description} handleclick={handleClick} />
      })}
    </div>
  )
}

export default ApiTask
