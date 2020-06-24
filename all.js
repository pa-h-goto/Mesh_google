'use strict'
// node-red専用


var url = "wss://node-red-boxjk.mybluemix.net/test"; // ← [output] websocket の path に合わせる
// WebSocketオブジェクト
var webSocket = null;

// 接続
 function open() {
    if (webSocket == null) {
        // 初期化
        webSocket = new WebSocket(url);
        // イベントハンドラ
        webSocket.onopen = (ev) => {
            console.log("Connect..");
        };

        webSocket.onmessage = (ev) => {
            if (ev && ev.data) {
                var msg = JSON.parse(ev.data);
                if (msg.functionId == "AccelerationShake"){
                    var d = document.getElementById('go');
                    d.click();
                } else{
                    console.log(msg)
                    var d = document.getElementById('turn-right');
                    d.click();
                }
            }
        };
        webSocket.onclose = (ev) => {
            console.log("disconnect(" + ev.code + ")");
            webSocket = null;
        };
        webSocket.onerror = (ev) => {
            console.log("Error " + ev);
        };;
    }
}
open();


// 画面の表示に関するクラス
class View {
    constructor(){
      this.count = 0;
    }
    // 進んだ距離を大体で表示する
    counter(){
      let intList = [1,2,3]
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      let int = intList[getRandomInt(3)]
      console.log(int)
      this.count = this.count + int;
      totalRun.textContent = `走行距離:約${this.count}m`;
    };
  
    //モーダルウィンドウ・進むとフルスクリーン表示になる
    modal(){
      container.classList.add('is-show');
      let time = setTimeout(()=>{
        container.classList.remove('is-show')
      },5000);
    };
  };
  

// Meshの情報を受けたときにStreetViewを動かすクラス
class Run {
    // 引数にpanoramaを渡す
    static goFunc(panorama, location) {
        const view = new View();
        go.addEventListener('click', () => {
            var link = panorama.getLinks();
            let val = 360;
            let target = 0;
            let currentPov = panorama.getPov();
            link.forEach(function (element, index) {
                let ans = Math.abs(currentPov.heading - element.heading);
                if (val > ans) {
                    val = ans;
                    target = index;
                }
            });
            panorama.setPov({
                heading: link[target].heading,
                pitch: 0
            });
            var pa = link[target]['pano'];
            panorama.setPano(pa);
            // streetview オブジェクトを作成しcontainerに格納する
            new google.maps.StreetViewPanorama(container, {
                position: location,
                pov: {
                  heading: 180,
                  pitch: 10
                }
              });
            view.counter();
            // view.modal();
        });
    };
    static turnFunc(panorama) {
        right.addEventListener('click', () => {
          var currentPov = panorama.getPov();
          var newPov = currentPov.heading + 30;
          panorama.setPov({
            heading: newPov,
            pitch: 0
          });
        })
      };
}



// 選択肢の中からボタンを押されると、その地域のマップが表示される
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

  var map = new google.maps.Map(mapEle, {
    center: '東萩駅',
    zoom: 18
  });
  var panorama = new google.maps.StreetViewPanorama(
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

  var map = new google.maps.Map(mapEle, {
    center: location,
    zoom: 18
  });
  var panorama = new google.maps.StreetViewPanorama(
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
