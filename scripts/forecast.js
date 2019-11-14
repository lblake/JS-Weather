const key = 'TRn6cu0ARrCozL814uhMjMJim7zgNweC';

const getCity = async (city) => {
  const baseURL =
    'http://dataservice.accuweather.com/locations/v1/cities/search';

  const query = `?apikey=${key}&q=${city}`;

  const repsonse = await fetch(baseURL + query);
  const data = await repsonse.json();

  console.log(data);
};

getCity('manchester');
