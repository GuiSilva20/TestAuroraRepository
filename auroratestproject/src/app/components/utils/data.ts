export const getHoraBrasilia = (dataISO: string): string => {
  const data = new Date(dataISO);
  data.setHours(data.getUTCHours() - 3);

  const horas = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');
  const segundos = String(data.getSeconds()).padStart(2, '0');

  return `${horas}:${minutos}:${segundos}`;
};
