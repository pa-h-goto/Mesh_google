'use strict'

// 接続先URI
var url = "ws://node-red-boxjk.mybluemix.net/test"; // ← [output] websocket の path に合わせる
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
                if (msg.objectId == "sb_obj_251"){
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


