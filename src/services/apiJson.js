
const getAllJobs = (/*  page */) => {

  return fetch('https://raw.githubusercontent.com/mariam-blanco/my-server/master/data.json')
    .then(response => response.json())
    .then(data => {
      return data;
    })

};

const getSearch = (query) => {
  const url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json${query}`;

  console.log(url);

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    })
};

export { getAllJobs, getSearch };
