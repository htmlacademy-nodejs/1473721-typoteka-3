'use strict';

const fs = require(`fs`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

const writeFileJson = (filename, offers) => {
  const content = JSON.stringify(offers);

  fs.writeFileSync(filename, content, (err) => {
    if (err) {
      return console.error(`Can't write data to file...`);
    }
    return console.info(`Operation success. File created.`);
  });
};

module.exports = {
  getRandomInt,
  shuffle,
  writeFileJson
};
