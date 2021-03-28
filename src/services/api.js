
const getDataAPI = (url) => {

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        if (response.status === 403) throw new Error("Hola");
        throw new Error("Soy el otro");
      }
      return response.json()
    })
    .then(data => {
      return data;
    })
    .catch((err) => {
      console.log("En API:", err.message)
    })
};

export default getDataAPI;
