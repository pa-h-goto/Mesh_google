'use strict'
import { Run } from "./Run.js";


button1.addEventListener('click', () => {
  let location = { lat: 35.66773, lng: 139.747914 }
  // 地図初期化
  let map = new google.maps.Map(mapEle, {
    zoom: 10,
    center: location,
    mayTypeId: google.maps.MapTypeId.ROADMAP
  });

  let panorama = new google.maps.StreetViewPanorama(
    panoEle, {
    position: location,
    pov: {
      heading: 180,
      pitch: 10
    }
  });
  map.setStreetView(panorama);

  let directionsService = new google.maps.DirectionsService;
  let directionsRenderer = new google.maps.DirectionsRenderer;
  let request = {
    origin: location, //開始地点
    destination: "神谷町駅", //最終地点
    travelMode: google.maps.TravelMode.WALKING //交通手段
  }

  // ルート検索を実行
  directionsService.route(request, function (response, status) {
    console.log(response);
    console.log(status);
    if (status === google.maps.DirectionsStatus.OK) {
      // ルート検索の結果を地図上に描画
      directionsRenderer.setMap(map);
      directionsRenderer.setDirections(response);
    }
  });
  Run.goFunc(panorama, location);
  Run.turnFunc(panorama);
});

button2.addEventListener('click', () => {
  let location = { lat: 34.409002, lng: 131.399754 };

  let map = new google.maps.Map(mapEle, {
    center: '東萩駅',
    zoom: 18
  });
  let panorama = new google.maps.StreetViewPanorama(
    panoEle, {
    position: {lat: 34.416873, lng: 131.409275},
    pov: {
      heading: 270,
      pitch: 10
    }
  });
  map.setStreetView(panorama);

  let directionsService = new google.maps.DirectionsService;
  let directionsRenderer = new google.maps.DirectionsRenderer;
  let request = {
    origin: '東萩駅', //開始地点
    destination: location, //最終地点
    travelMode: google.maps.TravelMode.WALKING //交通手段
  }

  // ルート検索を実行
  directionsService.route(request, function (response, status) {
    console.log(response);
    console.log(status);
    if (status === google.maps.DirectionsStatus.OK) {
      // ルート検索の結果を地図上に描画
      directionsRenderer.setMap(map);
      directionsRenderer.setDirections(response);
    }
  });
  Run.goFunc(panorama);
  Run.turnFunc(panorama);
});

button3.addEventListener('click', () => {
  let location = {lat: 41.886626, lng: 12.507411};

  let map = new google.maps.Map(mapEle, {
    center: location,
    zoom: 18
  });
  let panorama = new google.maps.StreetViewPanorama(
    panoEle, {
    position: location,
    pov: {
      heading: 290,
      pitch: 10
    }
  });
  map.setStreetView(panorama);

  let directionsService = new google.maps.DirectionsService;
  let directionsRenderer = new google.maps.DirectionsRenderer;
  let request = {
    origin: location, //開始地点
    destination: 'コロッセオ', //最終地点
    travelMode: google.maps.TravelMode.WALKING //交通手段
  }

  // ルート検索を実行
  directionsService.route(request, function (response, status) {
    console.log(response);
    console.log(status);
    if (status === google.maps.DirectionsStatus.OK) {
      // ルート検索の結果を地図上に描画
      directionsRenderer.setMap(map);
      directionsRenderer.setDirections(response);
    }
  });
  Run.goFunc(panorama);
  Run.turnFunc(panorama);
});
