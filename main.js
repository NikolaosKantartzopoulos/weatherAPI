let cityInput = document.getElementById('cityNameID');
let cityNameDisplay = document.getElementById("cityNameDisplay");
let weatherDesc = document.getElementById("weatherDesc");
let tempDisplay = document.getElementById("tempDisplay");
let windDisplay = document.getElementById("windDisplay");

function loadBackgroundImage(stringUrl){
          document.body.style.backgroundImage  = stringUrl;
          document.body.style.backgroundRepeat =  'no-repeat';
          document.body.style.backgroundAttachment = 'fixed';
          document.body.style.backgroundPosition = 'center'; 
          document.body.style.backgroundSize = 'cover'; 
}
function loadCityName () {
  var cityName = cityInput.value;
  cityNameDisplay.textContent = cityName;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1c2b4ee0c7e64b5f7a0303ab33492ee3&units=metric`)
  .then((response) => response.json())
  .then((data) => {
   console.log(data)
   cityNameDisplay.textContent = data.name;
   weatherDesc.textContent = data.weather[0].main;
   tempDisplay.textContent = data.main.temp;
   windDisplay.textContent = data.wind.speed;
   switch(data.weather[0].main){

        case "Clear":
       loadBackgroundImage("url('https://s7d2.scene7.com/is/image/TWCNews/img_3214_jpg-2')")
          break;
        case "Rain": case "Drizzle":
          loadBackgroundImage("url('https://patch.com/img/cdn20/users/22872566/20171218/123108/styles/raw/public/processed_images/rainfall-1513617588-7054.jpg')")
        break;
        case "Mist":
          loadBackgroundImage("url('https://www.collinsdictionary.com/images/full/mist_339182456.jpg')")
        break;
          case "Clouds":
          loadBackgroundImage("url('https://images.unsplash.com/photo-1611928482473-7b27d24eab80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80')") 
        break;
    }
  })
}

cityInput.addEventListener("keyup",(e)=>{
  if(e.key == "Enter"){ loadCityName()}
  else return null
})

loadBackgroundImage("url('https://img.freepik.com/free-vector/paper-style-3d-clouds-background-blue-sky_1017-38298.jpg?w=2000')")
