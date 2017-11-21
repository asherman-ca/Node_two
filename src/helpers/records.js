export const dateParser = (date) => {
  let response = '';
  let arrayDate = date.toString().split('');
  arrayDate.forEach((letter, i) => {
    response += letter;
    if (i === 1 || i === 3) {
      response += '/';
    }
  });
  return response;
};

export const sortData = (players) => {
  return players.sort((a, b) => {
    if (a.take < b.take) {
      return 1;
    } else {
      return -1;
    }
  });
};