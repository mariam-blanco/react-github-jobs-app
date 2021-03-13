// const url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${page}`;

const getAllJobs = (/*  page */) => {

  return fetch('https://raw.githubusercontent.com/mariam-blanco/my-server/master/data.json')
    .then(response => response.json())
    .then(data => {
      return data;
    })

};

const getSearch = (search, page) => {

  let query = `&description=${search.terms}&location=${search.location}`;
  search.isFullTime && (query += '&full_time=on');

  console.log(search);
  console.log(query);

  /*
  return fetch(url + query)
    .then(response => response.json())
    .then(data => {
      return data;
    })
  */

};



export { getAllJobs, getSearch };
