'use strict';

// PART 1: SHOW A FORTUNE - completed

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  fetch('/fortune')
    .then((response) => response.text())
    .then((status)=>{
      document.querySelector('#fortune-text').innerHTML = status;
    }
  )   
};


document.querySelector('#get-fortune-button').addEventListener('click', showFortune);



// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json?zipcode';
      //url should have zip entered by user
      // /weather.json?zipcode="90210"
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch(`${url}?zipcode=${zipcode}`) //url + zipcode variable together in templateLiteral `` with rest of url
  .then((response)=>response.json())
  .then((status)=> {
    console.log(status)
    // document.querySelector("thinG to be modified").
  })
}

//reference beLOW
// const button = document.querySelector('#update-status');

// button.addEventListener('click', () => {
//   const queryString = new URLSearchParams({ order: 123 }).toString();
//   // you could also hard code url to '/status?order=123'
//   const url = `/status?${queryString}`;

//   fetch(url)
//     .then((response) => response.text())
//     .then((status) => {
//       document.querySelector('#order-status').innerHTML = status;
//     });
// });
// //Python
// @app.route('/weather.json')
// def weather():
//     """Return a weather-info dictionary for this zipcode."""

//     zipcode = request.args.get('zipcode')
//     weather_info = WEATHER.get(zipcode, DEFAULT_WEATHER)
//     return jsonify(weather_info)
///INFO INSERT ENDS HERE!

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
