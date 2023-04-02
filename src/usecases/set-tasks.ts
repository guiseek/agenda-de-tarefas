import {getTasks} from './get-tasks'

export function setTasks(data: TaskItem) {
  console.log(data)

  const tasks = getTasks(data.date)
  console.log(tasks)

  tasks.push(data)

  /**
   * Escreva aqui 👇 o código para escrita
   * das tarefas usando a Web Storage API
   * 
   * Não se esqueça de usar a data quando
   * for registrar a lista de tarefas
   */
}
