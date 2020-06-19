'use strict'
const container = document.querySelector(".container")
const button1 = document.getElementById('tokyo');
const button2 = document.getElementById('yamaguchi');
const button3 = document.getElementById('roma');
const mapEle = document.getElementById('map');
const panoEle = document.getElementById('pano');
const go = document.getElementById('go');
const right = document.getElementById('turn-right');
const totalRun = document.getElementById('totalRun');

function initialize() {
  // let location = { lat: 35.66773, lng: 139.747914 };

  // var fenway = location;
  // var map = new google.maps.Map(mapEle, {
  //   center: fenway,
  //   zoom: 18
  // });
  // var panorama = new google.maps.StreetViewPanorama(
  //   panoEle, {
  //   position: fenway,
  //   pov: {
  //     heading: 180,
  //     pitch: 10
  //   }
  // });
  // map.setStreetView(panorama);
  window.addEventListener('load', ()=>{
    button1.click();
  })
};