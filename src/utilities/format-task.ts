export function formatTask(data: FormData): TaskItem {
  const value = Object.fromEntries(data.entries())
  return value as unknown as TaskItem
}
