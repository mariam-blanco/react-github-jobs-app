const getAllJobs = () => {
   return fetch('https://fake-server-github-jobs-app.herokuapp.com/jobs')
      .then(response => {
         return response.json();
      })
      .then(data => {
         return data;
      });
};

export default getAllJobs;
