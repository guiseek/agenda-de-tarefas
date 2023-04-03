import {getTasksByDate} from './get-tasks-by-date'

/**
 * Escreva aqui 👇 o código para escrita
 * das tarefas usando a Web Storage API
 *
 * @param task TaskItem
 */
export function setTasksByDate(task: TaskItem) {
  const tasks = getTasksByDate(task.date)
  tasks.push(task)

  JSON.stringify(tasks)
}
