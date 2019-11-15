const apikey = "TRn6cu0ARrCozL814uhMjMJim7zgNweC";

//Get weather information
const getWeather = async id => {
  const baseURL = "http://dataservice.accuweather.com/currentconditions/v1/";

  const query = `${id}?apikey=${apikey}`;

  const repsonse = await fetch(baseURL + query);
  const data = await repsonse.json();

  return data[0];
};
//Get city information
const getCity = async city => {
  const baseURL =
    "http://dataservice.accuweather.com/locations/v1/cities/search";

  const query = `?apikey=${apikey}&q=${city}`;

  const repsonse = await fetch(baseURL + query);
  const data = await repsonse.json();

  return data[0];
};


