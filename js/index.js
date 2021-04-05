function getState(state) {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET", "js/" + `${state}` + ".json" ,true);

      		xmlhttp.send();
}

function reset() {
  document.getElementById("state_name").innerHTML = "Click on a State";
  document.getElementById("state_capital").innerHTML = "";
  document.getElementById("state_largest_city").innerHTML = "";
  document.getElementById("state_ratification").innerHTML = "";
  document.getElementById("state_population").innerHTML = "";
  document.getElementById("state_total_area").innerHTML = "";
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(res => console.log("Service worker registered"))
      .catch(err => console.log("Service worker not registered", err));
  });
}

/*
var iowa = document.getElementById("iowa");
iowa.addEventListener("click", getIowa);

function getIowa() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/iowa.json",true);

      		xmlhttp.send();
}

var idaho = document.getElementById("idaho");
idaho.addEventListener("click", getIdaho);

function getIdaho() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/idaho.json",true);

      		xmlhttp.send();
}

var oregon = document.getElementById("oregon");
oregon.addEventListener("click", getOregon);

function getOregon() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/oregon.json",true);

      		xmlhttp.send();
}

var california = document.getElementById("california");
california.addEventListener("click", getCalifornia);

function getCalifornia() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/california.json",true);

      		xmlhttp.send();
}

var northDakota = document.getElementById("northDakota");
northDakota.addEventListener("click", getNorthDakota);

function getNorthDakota() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/northDakota.json",true);

      		xmlhttp.send();
}

var wyoming = document.getElementById("wyoming");
wyoming.addEventListener("click", getWyoming);

function getWyoming() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/wyoming.json",true);

      		xmlhttp.send();
}

var arizona = document.getElementById("arizona");
arizona.addEventListener("click", getArizona);

function getArizona() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/arizona.json",true);

      		xmlhttp.send();
}

var nevada = document.getElementById("nevada");
nevada.addEventListener("click", getNevada);

function getNevada() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/nevada.json",true);

      		xmlhttp.send();
}

var utah = document.getElementById("utah");
utah.addEventListener("click", getUtah);

function getUtah() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/utah.json",true);

      		xmlhttp.send();
}

var colorado = document.getElementById("colorado");
colorado.addEventListener("click", getColorado);

function getColorado() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/colorado.json",true);

      		xmlhttp.send();
}

var southDakota = document.getElementById("southDakota");
southDakota.addEventListener("click", getSouthDakota);

function getSouthDakota() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/southDakota.json",true);

      		xmlhttp.send();
}

var minnesota = document.getElementById("minnesota");
minnesota.addEventListener("click", getMinnesota);

function getMinnesota() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/minnesota.json",true);

      		xmlhttp.send();
}

var wisconsin = document.getElementById("wisconsin");
wisconsin.addEventListener("click", getWisconsin);

function getWisconsin() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/wisconsin.json",true);

      		xmlhttp.send();
}

var michigan = document.getElementById("michigan");
michigan.addEventListener("click", getMichigan);

function getMichigan() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/michigan.json",true);

      		xmlhttp.send();
}

var nebraska = document.getElementById("nebraska");
nebraska.addEventListener("click", getNebraska);

function getNebraska() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/nebraska.json",true);

      		xmlhttp.send();
}

var illinois = document.getElementById("illinois");
illinois.addEventListener("click", getIllinois);

function getIllinois() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/illinois.json",true);

      		xmlhttp.send();
}

var indiana = document.getElementById("indiana");
indiana.addEventListener("click", getIndiana);

function getIndiana() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/indiana.json",true);

      		xmlhttp.send();
}

var ohio = document.getElementById("ohio");
ohio.addEventListener("click", getOhio);

function getOhio() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/ohio.json",true);

      		xmlhttp.send();
}

var pennsylvania = document.getElementById("pennsylvania");
pennsylvania.addEventListener("click", getPennsylvania);

function getPennsylvania() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/pennsylvania.json",true);

      		xmlhttp.send();
}

var vermont = document.getElementById("vermont");
vermont.addEventListener("click", getVermont);

function getVermont() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/vermont.json",true);

      		xmlhttp.send();
}

var newYork = document.getElementById("newYork");
newYork.addEventListener("click", getNewYork);

function getNewYork() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/newYork.json",true);

      		xmlhttp.send();
}

var maine = document.getElementById("maine");
maine.addEventListener("click", getMaine);

function getMaine() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/maine.json",true);

      		xmlhttp.send();
}

var massachusetts = document.getElementById("massachusetts");
massachusetts.addEventListener("click", getMassachusetts);

function getMassachusetts() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/massachusetts.json",true);

      		xmlhttp.send();
}

var newHampshire = document.getElementById("newHampshire");
newHampshire.addEventListener("click", getNewHampshire);

function getNewHampshire() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/newHampshire.json",true);

      		xmlhttp.send();
}

var connecticut = document.getElementById("connecticut");
connecticut.addEventListener("click", getConnecticut);

function getConnecticut() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/connecticut.json",true);

      		xmlhttp.send();
}

var newJersey = document.getElementById("newJersey");
newJersey.addEventListener("click", getNewJersey);

function getNewJersey() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/newJersey.json",true);

      		xmlhttp.send();
}

var virginia = document.getElementById("virginia");
virginia.addEventListener("click", getVirginia);

function getVirginia() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/virginia.json",true);

      		xmlhttp.send();
}

var maryland = document.getElementById("maryland");
maryland.addEventListener("click", getMaryland);

function getMaryland() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/maryland.json",true);

      		xmlhttp.send();
}

var delaware = document.getElementById("delaware");
delaware.addEventListener("click", getDelaware);

function getDelaware() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/delaware.json",true);

      		xmlhttp.send();
}

var westVirginia = document.getElementById("westVirginia");
westVirginia.addEventListener("click", getWestVirginia);

function getWestVirginia() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/westVirginia.json",true);

      		xmlhttp.send();
}

var newMexico = document.getElementById("newMexico");
newMexico.addEventListener("click", getNewMexico);

function getNewMexico() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/newMexico.json",true);

      		xmlhttp.send();
}

var kansas = document.getElementById("kansas");
kansas.addEventListener("click", getKansas);

function getKansas() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/kansas.json",true);

      		xmlhttp.send();
}

var missouri = document.getElementById("missouri");
missouri.addEventListener("click", getMissouri);

function getMissouri() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/missouri.json",true);

      		xmlhttp.send();
}

var northCarolina = document.getElementById("northCarolina");
northCarolina.addEventListener("click", getNorthCarolina);

function getNorthCarolina() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/northCarolina.json",true);

      		xmlhttp.send();
}

var southCarolina = document.getElementById("southCarolina");
southCarolina.addEventListener("click", getSouthCarolina);

function getSouthCarolina() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/southCarolina.json",true);

      		xmlhttp.send();
}

var georgia = document.getElementById("georgia");
georgia.addEventListener("click", getGeorgia);

function getGeorgia() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/georgia.json",true);

      		xmlhttp.send();
}

var florida = document.getElementById("florida");
florida.addEventListener("click", getFlorida);

function getFlorida() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/florida.json",true);

      		xmlhttp.send();
}

var kentucky = document.getElementById("kentucky");
kentucky.addEventListener("click", getKentucky);

function getKentucky() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/kentucky.json",true);

      		xmlhttp.send();
}

var tennessee = document.getElementById("tennessee");
tennessee.addEventListener("click", getTennessee);

function getTennessee() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/tennessee.json",true);

      		xmlhttp.send();
}

var oklahoma = document.getElementById("oklahoma");
oklahoma.addEventListener("click", getOklahoma);

function getOklahoma() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/oklahoma.json",true);

      		xmlhttp.send();
}

var texas = document.getElementById("texas");
texas.addEventListener("click", getTexas);

function getTexas() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/texas.json",true);

      		xmlhttp.send();
}

var arkansas = document.getElementById("arkansas");
arkansas.addEventListener("click", getArkansas);

function getArkansas() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/arkansas.json",true);

      		xmlhttp.send();
}

var alabama = document.getElementById("alabama");
alabama.addEventListener("click", getAlabama);

function getAlabama() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/alabama.json",true);

      		xmlhttp.send();
}

var mississippi = document.getElementById("mississippi");
mississippi.addEventListener("click", getMississippi);

function getMississippi() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/mississippi.json",true);

      		xmlhttp.send();
}

var louisiana = document.getElementById("louisiana");
louisiana.addEventListener("click", getLouisiana);

function getLouisiana() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/louisiana.json",true);

      		xmlhttp.send();
}

var washington = document.getElementById("washington");
washington.addEventListener("click", getWashington);

function getWashington() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/washington.json",true);

      		xmlhttp.send();
}

var montana = document.getElementById("montana");
montana.addEventListener("click", getMontana);

function getMontana() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/montana.json",true);

      		xmlhttp.send();
}

var rhodeIsland = document.getElementById("rhodeIsland");
rhodeIsland.addEventListener("click", getRhodeIsland);

function getRhodeIsland() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/rhodeIsland.json",true);

      		xmlhttp.send();
}

var alaska = document.getElementById("alaska");
alaska.addEventListener("click", getAlaska);

function getAlaska() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/alaska.json",true);

      		xmlhttp.send();
}

var hawaii = document.getElementById("hawaii");
hawaii.addEventListener("click", getHawaii);

function getHawaii() {
  let xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange=function(){
      			if (xmlhttp.readyState==4 && xmlhttp.status==200)
      			{
              let stateObject = JSON.parse(xmlhttp.responseText);
      			  document.getElementById("state_name").innerHTML = stateObject.state_name;
              document.getElementById("state_capital").innerHTML = stateObject.state_capital;
              document.getElementById("state_largest_city").innerHTML = stateObject.state_largest_city;
              document.getElementById("state_ratification").innerHTML = stateObject.state_ratification;
              document.getElementById("state_population").innerHTML = stateObject.state_population;
              document.getElementById("state_total_area").innerHTML = stateObject.state_total_area;
      			}
      		}

      		xmlhttp.open("GET","js/hawaii.json",true);

      		xmlhttp.send();
}

  var reset = document.getElementById("reset");
  reset.addEventListener("click", reset);
*/
