import React from 'react'
import './DeleteTask.scss'
import { task } from '../listTask/optionsListTask'
import Button from '../commons/task/Task'
import ApiTask from '../commons/apiTask/ApiTask'

const DeleteTask = () => {
  return (
    <section className="form">
      <form action="" className="form__form">
        <h1>Eliminar tareas</h1>
        <div className="form__form__title">
          <label>Id de la tarea</label>
          <input type="text" placeholder="Id de la tarea" />
        </div>
        <div className="form__form__buttons">
          <button type="submit" className="form__form__buttons__add">
            Eliminar tarea
          </button>
          <button type="submit" className="form__form__buttons__back">
            Volver
          </button>
        </div>
      </form>
      <section className="form__task">
        <ApiTask />
      </section>
    </section>
  )
}

export default DeleteTask
