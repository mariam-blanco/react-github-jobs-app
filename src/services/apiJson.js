
const getAllJobs = (/*  page */) => {

  return fetch('https://raw.githubusercontent.com/mariam-blanco/my-server/master/data.json')
    .then(response => response.json())
    .then(data => {
      return data;
    })

};

const getSearch = (queryStr) => {
  const url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json${queryStr}`;

  console.log('Soy la url de la API: ', url);

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    })
};

export { getAllJobs, getSearch };
