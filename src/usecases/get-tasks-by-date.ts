/**
 * Escreva aqui 👇 o código para leitura
 * das tarefas usando a Web Storage API
 *
 * @param date utilize date como chave
 */
export function getTasksByDate(date: string): TaskItem[] {
  const tasks = `[]`

  return tasks ? JSON.parse(tasks) : []
}
