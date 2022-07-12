export const convertText = (str: string): string => {
  if (!str) return '';
  return (
    str[0].toUpperCase() + str.substring(1).toLowerCase().replaceAll("_", " ")
  );
};
