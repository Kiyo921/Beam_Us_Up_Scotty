var Map = require("./src/models/map");
var map;

var handleSetHomeButton = function(){
  console.log(map.markerPosition());
  localStorage.setItem("latlng", map.markerPosition());
  var welcomeDiv = document.getElementById("welcome_page");
  welcomeDiv.style.display = "none";
};

var app = function(){
  var container = document.getElementById("welcome_map");
  var centre = {lat:0, lng:0};
  var zoom = 2;
  map = new Map( container, centre, zoom );

  var setHomeButton = document.getElementById("set_home");
  setHomeButton.onclick = handleSetHomeButton;

  map.createMarker();
  map.addClickListener();

  var submitButton = document.getElementById('submitDiary');

  submitButton.onclick = function(){
    var text = document.getElementById('diaryText').value;
    var date = document.getElementById('date').value;
    var title = document.getElementById('title').value;
    var diaryInput = {
      text: text,
      date: date,
      title: title
    }
    console.log(diaryInput);
  };



}

window.onload = app;