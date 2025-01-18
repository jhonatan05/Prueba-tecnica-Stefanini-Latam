import React from 'react'
import './Dashboard.scss'
import ListTask from '../../components/ListTask/ListTask'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/add')
  }
  return (
    <section className="dashboard">
      <div className="dashboard__list-task">
        <h2>Lista de tareas</h2>
        <section className="dashboard__list-task__buttons">
          <button type="button" className="dashboard__list-task__buttons__add" onClick={handleNavigate}>
            Agregar Tareas
          </button>
        </section>
      </div>
      <ListTask />
    </section>
  )
}

export default Dashboard
