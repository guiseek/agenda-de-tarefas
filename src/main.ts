import {formatFromCalendar, explodeDateFromForm, formatTask} from './utilities'
import {getTasks, setTasks} from './usecases'
import './elements/calendar'
import './style.scss'

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')
  const inputDate = form.querySelector<HTMLInputElement>('#date')
  const dialog = document.querySelector('dialog')
  dialog.showModal()

  form.onsubmit = (ev) => {
    ev.preventDefault()

    const data = new FormData(form)

    /**
     * Envia para armazenar tarefa
     */
    setTasks(formatTask(data))
  }

  inputDate.onchange = () => {
    const {year, month, day} = explodeDateFromForm(inputDate.value)
    calendar.updateDate(+year, +month, +day)
  }

  /** Calendar */
  const calendar = document.querySelector('type-calendar')
  calendar.addEventListener('selected', ({detail}: CustomEvent<DayDataSet>) => {
    const date = formatFromCalendar(detail)
    /**
     * Verifica se tem tarefas pra este dia
     * e retorna uma lista, mesmo que vazia
     */
    inputDate.value = date
    const tasks = getTasks(date)
    console.log(tasks)
  })
})
