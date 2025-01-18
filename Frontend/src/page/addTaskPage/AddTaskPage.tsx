import React, { useState } from 'react'
import './AddTaskPage.scss'
import { useNavigate } from 'react-router-dom'

const AddTaskPage = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  
  const handleNavigate = () => {
    navigate('/')
  }

  const handleSubmit = async () => {
    const newTask = {
      title,
      description,
    }
    
    try {
      await fetch('http://localhost:8080/task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
        
       } );
       handleNavigate()
    } catch (error) {
      console.error('Error en la solicitud:', error)
    }
  }

  return (
    <main className="add-task">
      <section className="add-task__form">
        <h1>Agregar Tareas</h1>
        <div className="add-task__form__title">
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
        <div className="add-task__form__description">
          <label htmlFor="">Descripcion</label>
          <textarea
            placeholder="Descripcion"
            rows={5}
            cols={40}
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="add-task__form__buttons">
          <button type="submit" className="add-task__form__buttons__add" onClick={handleSubmit}>
            Agregar tarea
          </button>
          <button className="add-task__form__buttons__back" onClick={handleNavigate}>
            Volver
          </button>
        </div>
      </section>
    </main>
  )
}

export default AddTaskPage
