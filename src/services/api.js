
const GitHub = {
  setURL = (terms, location, isFullTime) => {
    const corsURL = "https://cors-anywhere.herokuapp.com/";
    const baseURL = "https://jobs.github.com/positions.json";

    url = `${corsURL + baseURL}?page=${numPage}`;


    if (terms === undefined && location === undefined) {
      return url;
    }
    if (terms !== "") {
      url += `&description=${terms}`;
    }
    if (location !== "") {
      url += `&location=${location}`;
    }
    if (isFullTime) {
      url += "&full_time=on";
    }
    return url;

  },

  getJobs = async (terms, location, isFullTime) => {
    let jobs = [];
    url = setURL(terms, location, isFullTime);
    //console.log(url);
    try {
      const response = await fetch(url);
      if (response.status === 403) {
        throw new Error(
          `
          failed to load resource. 
          <ol>
            <li>Go to <a href="https://cors-anywhere.herokuapp.com/corsdemo">cors-anywhere.herokuapp.com</a></li>
            <li>Click the button to unlock CORS Anywhere for your browser</li>
            <li>Come back to this page and reload to get the jobs list.</li>
          </ol> 
          `
        );
      }
      jobs = await response.json();
      renderCards(jobs);
    } catch (error) {
      showMessage(error);
    }
  }

}

export default GitHub;
