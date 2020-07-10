// api key
const key='OUaOTkJinaDsynQE7wRYsp51yoxAAVEp';

//  get weather information
const getWeather = async (id) =>{
    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    
    const response = await fetch(base + query);
    const data =  await response.json();

    return data[0];
};

// get city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const reposnse = await fetch(base + query);
    const data = await reposnse.json();

    return data[0];
};













// 298090

