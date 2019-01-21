const countryCode = 'MX';

const countryRequest = new XMLHttpRequest();
countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
countryRequest.send();

countryRequest.addEventListener('readystatechange', (e) => {
   if(e.target.readyState === 4 && e.target.status === 200){
       const data = JSON.parse(e.target.responseText);
       const country = data.find((country) => {
           return country.alpha2Code === countryCode;
       })
       console.log(country.name)
      
   } else if (e.target.readyState === 4){
       console.log('Unable to fetch Data')
   }
   
})