'use strict'
const container = document.querySelector(".container")
const button1 = document.getElementById('tokyo');
const button2 = document.getElementById('yamaguchi');
const button3 = document.getElementById('roma');
const mapEle = document.getElementById('map');
const panoEle = document.getElementById('pano');
const go = document.getElementById('go');
const right = document.getElementById('turn-right');
const clickButton = document.getElementById('onclick');


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


  let location = { lat: 35.66773, lng: 139.747914 }
  // 地図初期化
  var map = new google.maps.Map(mapEle, {
    zoom: 10,
    center: location,
    mayTypeId: google.maps.MapTypeId.ROADMAP
  });

  var panorama = new google.maps.StreetViewPanorama(
    panoEle, {
    position: location,
    pov: {
      heading: 180,
      pitch: 10
    }
  });
  map.setStreetView(panorama);

  var directionsService = new google.maps.DirectionsService;
  var directionsRenderer = new google.maps.DirectionsRenderer;

  // ルート検索を実行
  directionsService.route({
    origin: location, //開始地点
    destination: "神谷町駅", //最終地点
    travelMode: google.maps.TravelMode.WALKING //交通手段
  }, function (response, status) {
    console.log(response);
    if (status === google.maps.DirectionsStatus.OK) {
      // ルート検索の結果を地図上に描画
      directionsRenderer.setMap(map);
      directionsRenderer.setDirections(response);
    }
  });


};

