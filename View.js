'use strict'

export class View {
  constructor(){
    this.count = 0;
  }
  // 進んだ距離を大体で表示する
  counter(){
    this.count++;
    var m = this.count * 2;
    clickButton.textContent = `走行距離:約${m}m`;
  };

  //モーダルウィンドウ・進むとフルスクリーン表示になる
  modal(){
    container.classList.add('is-show');
  };
};









