

var xhr = new XMLHttpRequest();
xhr.open('GET','/getWeather?city=beijing',true);
xhr.send();

xhr.onload = function () {
    console.log(xhr.responseText);
}


