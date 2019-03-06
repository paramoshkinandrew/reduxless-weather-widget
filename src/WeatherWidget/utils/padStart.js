export const padStart = (str, n, symb) => {
  const filler = (new Array(n)).fill(symb);
  return String(filler + str).slice(-n);
};
