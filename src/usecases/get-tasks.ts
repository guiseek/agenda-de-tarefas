export function getTasks(date: string): TaskItem[] {
  /**
   * Escreva aqui 👇 o código para leitura
   * das tarefas usando a Web Storage API
   * 
   * não se esqueça de usar o valor
   * date disponível como argumento
   * na hora de buscar as tarefas
   */
  console.log(date);
  
  const tasks = `[]`

  return tasks ? JSON.parse(tasks) : []
}
