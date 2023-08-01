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

//DOMからフィルターされた演習の合計要素を取得する
const filteredExerTotal = document.getElementById('filteredExerTotal');

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
  filteredExerTotal.innerText = filteredArray.length;
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
SettingButton.addEventListener('click', arrayFilter);

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

//DOMから各IDでHTML要素を取得
const exercisesBox = document.getElementById('exercisesBox');
const dayNoOfExer = document.getElementById('dayNoOfExer');
const dateOfExer = document.getElementById('dateOfExer');
const titleOfExer = document.getElementById('titleOfExer');
const subtitleOfExer = document.getElementById('subtitleOfExer');
const difficultyOfExer = document.getElementById('difficultyOfExer');
const numOfExer = document.getElementById('numOfExer');
const commentOfExer = document.getElementById('commentOfExer');
const CloseExercisesBox = document.getElementById('CloseExercisesBox');

//ランダム変数でobjを取得する
let selectObj;

function changeTheExerText() {
  selectObj = filteredArray[random];
  dayNoOfExer.innerText = selectObj.dayNo;
  dateOfExer.innerText = `(${selectObj.date})`;
  titleOfExer.innerText = selectObj.title;
  subtitleOfExer.innerText = selectObj.subTitle;
  difficultyOfExer.innerText = selectObj.difficulty;
  numOfExer.innerText = `(${selectObj.Num})`;
  commentOfExer.innerText = selectObj.comment;
};

//マウスイベントを設定
StartButton.addEventListener('click', changeTheExerText);


//演習ボックスを開く
StartButton.addEventListener('click', () => exercisesBox.style.display = 'block');
//スタートボタンの文字を変更する
StartButton.addEventListener('click', () => StartButton.innerText = 'Shuffle!');
//スタートボタンの背景色を変更する
StartButton.addEventListener('click', () => StartButton.style.backgroundColor = 'rgb(99, 26, 216)');
//演習ボックスを閉じる
CloseExercisesBox.addEventListener('click', () => exercisesBox.style.display = 'none');
//スタートボタンの文字を戻す
CloseExercisesBox.addEventListener('click', () => StartButton.innerText = 'Start!');
//スタートボタンの背景色を戻す
CloseExercisesBox.addEventListener('click', () => StartButton.style.backgroundColor = 'rgb(42, 163, 89)');

//DOMからViceroyジャンプボタン要素を取得する
const JunpToViceroyButton = document.getElementById('JunpToViceroyButton');
//クリック時に新規タブで開く
JunpToViceroyButton.addEventListener('click', () => window.open(selectObj.URL,  '_blank', 'noreferrer'));




// // //データベースチェッカー(level)
// // console.log(allExercises.filter(obj => obj.difficulty !== "基礎演習" && obj.difficulty !== "中級演習" && obj.difficulty !== "応用演習" && obj.difficulty !== "ナイトメア問題 😈" && obj.difficulty !== "読み物📖"));
// // //データベースチェッカー(assessment)
// // console.log(allExercises.filter(obj => obj.assessment != 1 && obj.assessment != 2 && obj.assessment != 3));
