export const timeIconFunc = (callback, data) => {
  const hour = +callback({ timeZona: data }).split(":")[0];

  console.log(hour);
  return callback({
    timeZona: data,
  });
};
