'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//HTML基礎 2023-07-07 (day3)
//HTML + CSS 2023-07-14 (day8)
//プレゼン説明 2023-07-19 (day10)




//dropdownでフィルターした配列を代入する変数
let filteredArray = allExercises;


//DOMから各ドロップダウン要素を取得する
const levelSelected = document.getElementById('levelDoropdown');
const rangeSelected = document.getElementById('rangeDoropdown');


//allExercisesに入っている配列にフィルターをかける関数（※rangeでアセスメントを比較する際は"string"と"number"のため、「 == 」で比較する事）
function arrayFilter() {
  //配列からすべてのobjを取得
  if(levelSelected.value === "すべて" &&
  rangeSelected.value === "すべて") {
    filteredArray = allExercises;
    //配列からlevelはフィルターなしで、rangeでのみフィルターしたobjを取得
  } else if(levelSelected.value === "すべて") {
    filteredArray = allExercises.
    filter(obj => obj.assessment == rangeSelected.value);
    //配列からrangeはフィルターなしで、levelでのみフィルターしたobjを取得
  } else if (rangeSelected.value === "すべて") {
    filteredArray = allExercises.
    filter(obj => obj.difficulty === levelSelected.value);
    //配列からlevelとrangeを同時取得してobjを取得する
  } else {
    filteredArray = allExercises.
    filter(obj => obj.difficulty === levelSelected.value).
    filter(obj => obj.assessment == rangeSelected.value);
  }
  console.log(filteredArray);
}

//levelセレクタにイベントを設定。セレクタが変更されたら実行する。
levelSelected.addEventListener('change', arrayFilter);
//rangeセレクタにイベントを設定。セレクタが変更されたら実行する。
rangeSelected.addEventListener('change', arrayFilter);


//---------------------------------------------------------------------------------------

//DOMからセッティングBOX要素を取得する
const settingBox = document.getElementById("settingBox");

//randamIndex()で作成したインデックスを入れる
let random;

//settingBoxを表示させる
function displayOn() {
  settingBox.style.display = 'block';
  console.log("OK!");
}

//DOMからセッティングボタン要素を取得する
const SettingButton = document.getElementById("SettingButton");
//セッティングボタンにマウスイベントを設定
SettingButton.addEventListener('click', displayOn);


//settingBoxを非表示にする関数
function displayNone() {
  settingBox.style.display = 'none'
}

//DOMからクローズボタン要素を取得する
const CloseButton = document.getElementById("CloseSttingBox");
//クローズボタンにマウスイベントを設定
CloseButton.addEventListener('click',displayNone);




//ランダムを生成する関数（インデックス用の為、10なら0~9の数値をランダム生成する）
function randamIndex() {
  random = Math.floor(Math.random() * filteredArray.length);
  console.log("random:", random);
}


//DOMからスタートボタン要素を取得する
const StartButton = document.getElementById("StartButton");
//スタートボタンにマウスイベントを設定
StartButton.addEventListener('click', randamIndex);

//---------------------------------------------------------------------------------------------
//変数randomに代入されているインデックスでfilteredArrayのobjにアクセスして、HTML要素を変更する
// function () {
  
// }

// const 

// <div id="dayNoAndDateOfBlock">
// <i id="dayNoOfExer">day-80</i>
// <i id="dateOfExer">(2023/07/28)</i>
// </div>
// <h1 id="titleOfExer">高階関数入門</h1>
// <h3 id="subtitleOfExer">～サブタイトル～</h3>
// <hr color="green">
// <div id="difficultyAndNumOfBlock">
// <em id="difficultyOfExer">中級演習</em>
// <em id="numOfExer">（５問）</em>
// </div>
// <Button id="JunpToViceroyButton">Junp to Viceroy!</Button>
// <p id="commentOfExer">ここにコメントが入るよーーーん！！！こんにちは！！！こんばんみ！！</p>


// // //データベースチェッカー(level)
// // console.log(allExercises.filter(obj => obj.difficulty !== "基礎演習" && obj.difficulty !== "中級演習" && obj.difficulty !== "応用演習" && obj.difficulty !== "ナイトメア問題 😈" && obj.difficulty !== "読み物📖"));
// // //データベースチェッカー(assessment)
// // console.log(allExercises.filter(obj => obj.assessment != 1 && obj.assessment != 2 && obj.assessment != 3));
