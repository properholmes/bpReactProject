import React, { useState } from 'react'
import Date from './Components/Date'
import DayPlan from './Components/DayPlan'
import MonthPlan from './Components/MonthPlan'
import Notes from './Components/Notes'
import Pscore from './Components/Pscore'
import Quotes from './Components/Quotes'
import SecondTs from './Components/SecondTs'
import TaskUno from './Components/TaskUno'
import './App.css'


function App() {

  return (
    <>
      <h1>quotes</h1>
      <Date />
      <DayPlan />
      <MonthPlan />
      <Quotes />
      <TaskUno />
      <SecondTs />
      <Notes />
      <Pscore />
    </>
  )
}

export default App
