
const getSearch = (APIquery) => {
  const url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json${APIquery}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    })
};

export default getSearch;
