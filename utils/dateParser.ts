export const dateParser = (datePost: any): string =>
  new Date(datePost).toLocaleString('en-Us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
