export const getDescription = (description: string) => {
  if (description.length > 100) {
    return description.slice(0, 200) + " ...";
  }
  return description;
};
