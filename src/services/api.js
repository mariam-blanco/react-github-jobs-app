const getAllJobs = () => {

  return fetch(
    "https://raw.githubusercontent.com/mariam-blanco/server-02/main/db.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

export default getAllJobs;
