export const dateParser = (datePost: string): string =>
  new Date(datePost).toLocaleString('en-Us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
