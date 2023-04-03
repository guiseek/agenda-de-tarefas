import {getTasksByDate, setTasksByDate} from './usecases'
import './elements/calendar'
import {
  explodeDateFromForm,
  formatFromCalendar,
  formatTask,
  formatDate,
} from './utilities'
import './style.scss'

document.addEventListener('DOMContentLoaded', () => {
  const template = document.querySelector('template')
  const section = document.querySelector('section')
  const form = document.querySelector('form')

  const inputDate = form.querySelector<HTMLInputElement>('#date')
  const dialog = document.querySelector('dialog')

  /* Mostra dialog de instruções */
  dialog.showModal()

  /* Evento de submissão */
  form.onsubmit = (ev) => {
    ev.preventDefault()

    /*  Dados do formulário */
    const data = new FormData(form)
    const task = formatTask(data)

    /* Envia para armazenar */
    setTasksByDate(task)

    /* listTasksByDate */
  }

  /* Calendário */
  const calendar = document.querySelector('type-calendar')

  /* Evento disparado quando um dia é selecionado */
  calendar.addEventListener('selected', ({detail}: CustomEvent<DayDataSet>) => {
    const date = formatFromCalendar(detail)
    /* Altera a data do input date,
    com a data do dia selecionado */
    inputDate.value = date

    /* removeChildren */

    /* listTasksByDate */
  })

  /* listTasksByDate */

  /* Quando o campo de data é alterado,
    fazemos a alteração no calendário */
  inputDate.onchange = () => {
    const {year, month, day} = explodeDateFromForm(inputDate.value)
    calendar.updateDate(+year, +month, +day)
  }
})

/* function removeChildren */

/* function listTasksByDate */
