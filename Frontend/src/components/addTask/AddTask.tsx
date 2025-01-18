import React, { useState } from 'react'
import './AddTask.scss'
import { useNavigate } from 'react-router-dom'

const AddTask = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async () => {
    const newTask = {
      title,
      description,
    }

    try {
      const response = await fetch('http://localhost:8080/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      })
    } catch (error) {
      console.error('Error en la solicitud:', error)
    }
  }
  const handleNavigate = () => {
    navigate('/')
  }
  return (
    <section className="form">
      <form action="" className="form__form" onSubmit={handleSubmit}>
        <h1>Agregar Tareas</h1>
        <div className="form__form__title">
          <label>Titulo</label>
          <input
            type="text"
            placeholder="Titulo"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form__form__description">
          <label htmlFor="">Descripcion</label>
          <textarea
            placeholder="Descripcion"
            rows={5}
            cols={30}
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form__form__buttons">
          <button type="submit" className="form__form__buttons__add">
            Agregar tarea
          </button>
          <button className="form__form__buttons__back" onClick={handleNavigate}>
            Volver
          </button>
        </div>
      </form>
    </section>
  )
}

export default AddTask
