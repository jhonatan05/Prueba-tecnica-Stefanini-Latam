import React from 'react'
import './Dashboard.scss'
import ApiTask from '../../components/commons/apiTask/ApiTask'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  //Dashboard
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/add')
  }
  return (
    <section className="task">
      <div className="listTask">
        <h2>Lista de tareas</h2>
        <section className="listTask__buttons">
          <button type="button" className="listTask__buttons__add" onClick={handleNavigate}>
            Agregar Tareas
          </button>
        </section>
      </div>
      <ApiTask />
    </section>
  )
}

export default Dashboard
