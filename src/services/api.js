
const getDataAPI = (url) => {

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    })
};

export default getDataAPI;
