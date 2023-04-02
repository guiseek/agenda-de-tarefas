import {formatFromCalendar, explodeDateFromForm, formatTask} from './utilities'
import {getTasks, setTasks} from './usecases'
import './elements/calendar'
import './style.scss'

document.addEventListener('DOMContentLoaded', () => {
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

    /* Envia para armazenar */
    setTasks(formatTask(data))
  }

  /* Calendário */
  const calendar = document.querySelector('type-calendar')

  /* Evento disparado quando um dia é selecionado */
  calendar.addEventListener('selected', ({detail}: CustomEvent<DayDataSet>) => {
    const date = formatFromCalendar(detail)
    /* Altera a data do input date,
    com a data do dia selecionado */
    inputDate.value = date

    /* Busca lista de tarefas */
    const tasks = getTasks(date)

    /* Mostra lista no console */
    console.log(tasks)

    /**
     * E aqui você pode trabalhar criando os
     * itens que serão adicionados 👇 no HTML
     */
    tasks.forEach((task) => {})
  })

  /* Quando o campo de data é alterado,
    fazemos a alteração no calendário */
  inputDate.onchange = () => {
    const {year, month, day} = explodeDateFromForm(inputDate.value)
    calendar.updateDate(+year, +month, +day)
  }

  /* Aguarda 6 segundos e move o scroll
    de instruções até a 'última seção */
  setTimeout(() => {
    const important = dialog.querySelector('#important')
    important.scrollIntoView({behavior: 'smooth'})
  }, 6000)
})
