const generateId = (): string => {
  return Math.random().toString(26).substring(2, 9);
};

export default generateId;
