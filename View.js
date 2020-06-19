'use strict'

export class View {
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









