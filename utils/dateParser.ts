export const dateParser = (datePost: any) =>
  new Date(datePost).toLocaleString('en-Us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
