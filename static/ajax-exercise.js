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


// PART 2: SHOW WEATHER - completed

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
      //url should have zip entered by user
      // /weather.json?zipcode="90210"
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch(`${url}?zipcode=${zipcode}`) //url + zipcode variable together in templateLiteral `` with rest of url
  .then((response)=>response.json())
  .then((status)=> {
    console.log(status)
    document.querySelector('#weather-info').innerHTML = status.forecast
  });
}



document.querySelector('#weather-form').addEventListener('submit', showWeather);


// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  const url = '/order-melons.json';
  const htmlLocation= document.querySelector("#order-status")
  //formInput
  const formInput = {
    'melon_type': document.querySelector('#melon-type-field').value,
    'qty': document.querySelector('#qty-field').value
  }
  //fetch request
  fetch(url, {
    method: "POST",
    body: JSON.stringify(formInput),
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then((response) => response.json())
  .then((status) => {
    console.log(status.msg)
    if (status.msg =="ERROR"){
      htmlLocation.classList.add("order-error");
      //classList is a list of all the elements that an html element has
      // htmlLocation.classList.remove("order-status")
      htmlLocation.innerHTML = `<p>${status.msg}</p>`
      alert(status.msg)
    } else {
      alert(status.msg)
      htmlLocation.innerHTML = `<p>${status.msg}</p>`
    }
  })
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
  // give class .order-error



  
}

//PYTHON CODE:
// @app.route('/order-melons.json', methods=['POST'])
// def order_melons():
//     """Order melons and return a dictionary of result-code and result-msg."""
//     melon = request.json.get('melon_type')
//     qty = int(request.json.get('qty'))

//     if qty > 10:
//         result_code = 'ERROR'
//         result_text = "You can't buy more than 10 melons"
//     elif qty > 0:
//         result_code = 'OK'
//         result_text = f"You have bought {qty} {melon} melons"
//     else:
//         result_code = 'ERROR'
//         result_text = "You want to buy fewer than 1 melons? Huh?"

//     return jsonify({'code': result_code, 'msg': result_text})
    //SERVER.PY PYTHON CODE END
document.querySelector('#order-form').addEventListener('submit', orderMelons);
