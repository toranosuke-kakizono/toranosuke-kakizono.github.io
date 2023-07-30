'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//HTML基礎 2023-07-07 (day3)
//HTML + CSS 2023-07-14 (day8)
//プレゼン説明 2023-07-19 (day10)




const ViceroyBox = document.getElementById("ViceroyBox");

//ViceroyBoxを表示する
function displayOn() {
  ViceroyBox.style.display = 'block';
  console.log("OK!");
}
//ViceroyBoxを表示するアクション
const SettingButton = document.getElementById("SettingButton");
SettingButton.addEventListener('click', displayOn);


//ViceroyBoxを非表示にする関数
function displayNone() {
  ViceroyBox.style.display = 'none'
}
//ViceroyBoxを非表示にするアクション
const CloseButton = document.getElementById("CloseButtonBox");
CloseButton.addEventListener('click',displayNone);


//ランダムを生成する関数（10なら0~9のナンバー）
function randamIndex() {
  let random = Math.floor(Math.random() * 10);
  console.log(random);
}
//ランダムを生成するアクション
const StartButton = document.getElementById("StartButton");
StartButton.addEventListener('click', randamIndex);
