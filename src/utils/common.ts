export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options = { day: '2-digit', weekday: 'short' } as const;
  return date.toLocaleDateString('en-US', options).replace(',', '');
};
