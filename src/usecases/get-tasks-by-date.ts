/**
 * Escreva aqui 👇 o código para leitura
 * das tarefas usando a Web Storage API
 *
 * @param date utilize date como chave
 */
export function getTasksByDate(date: string): TaskItem[] {
  const tasks = localStorage.getItem(date)

  return tasks ? JSON.parse(tasks) : []
}
