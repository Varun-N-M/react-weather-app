export async function fetchData(prefix) {
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${prefix}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_CITY_NAME_SUGGESTION,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };
  
    const response = await fetch(url, options);
    const result = await response.json();
    return result
  }
  
  // console.log(result);
  
  