"use strict";

const btn = document.querySelector('.button');
const inputValueElem = document.querySelector('.inputValue');

const nameElem = document.querySelector('#name');
const tempElem = document.querySelector('.temp');
const descElem = document.querySelector('.desc');

const ApiKey = '19f6cc865b9aff2ab56767e0a2b35ce6';
const endpoint = 'https://api.openweathermap.org/data/2.5/weather?q=';

//`${endpoint}${inputValueElem.value}&appid=${ApiKey}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValueElem.value + '&appid=' + ApiKey)
    .then(res => res.json())
    .then(jsonData => {
    
        console.log(jsonData['main']['temp']);
        console.log(jsonData['weather'][0]['description']); 

        
        let cityNameValue = jsonData['name'];
        let tempValuesKelvin = jsonData['main']['temp'];
        let tempValuesCelcius = tempValuesKelvin - 273.15;
        let descValue = jsonData['weather'][0]['description']; 

        nameElem.innerText = cityNameValue;  
        tempElem.innerText = `Temperature: ${tempValuesCelcius.toFixed(2)} °C`; 
        descElem.innerText = descValue;

    })
});
