export const stringToDateConverter = (date?: string) => {
  if (!date) return
  const newDate = new Date(date)
  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(newDate)

  return formattedDate
}
