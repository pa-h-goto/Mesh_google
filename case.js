'use strict'
import { Run } from "./Run.js";

button1.addEventListener('click', () => {
    let location = { lat: 35.66773, lng: 139.747914 };

    var fenway = location;
    var map = new google.maps.Map(mapEle, {
      center: fenway,
      zoom: 18
    });
    var panorama = new google.maps.StreetViewPanorama(
      panoEle, {
      position: fenway,
      pov: {
        heading: 180,
        pitch: 10
      }
    });
    map.setStreetView(panorama);
    Run.goFunc(panorama);
    Run.turnFunc(panorama);
  });
  
  button2.addEventListener('click', () => {
    let location = { lat: 34.409002, lng: 131.399754 };
  
    var fenway = location;
    var map = new google.maps.Map(mapEle, {
      center: fenway,
      zoom: 18
    });
    var panorama = new google.maps.StreetViewPanorama(
      panoEle, {
      position: fenway,
      pov: {
        heading: 270,
        pitch: 10
      }
    });
    map.setStreetView(panorama);
    Run.goFunc(panorama);
    Run.turnFunc(panorama);
  });
  
  button3.addEventListener('click', () => {
    let location = { lat: 41.914202, lng: 12.496250 };
  
    var fenway = location;
    var map = new google.maps.Map(mapEle, {
      center: fenway,
      zoom: 18
    });
    var panorama = new google.maps.StreetViewPanorama(
      panoEle, {
      position: fenway,
      pov: {
        heading: 180,
        pitch: 10
      }
    });
    map.setStreetView(panorama);
    Run.goFunc(panorama);
    Run.turnFunc(panorama);
  });
  