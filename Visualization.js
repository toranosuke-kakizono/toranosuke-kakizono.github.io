'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//HTML基礎 2023-07-07 (day3)
//HTML + CSS 2023-07-14 (day8)
//プレゼン説明 2023-07-19 (day10)



function outoputExerNum() {
  document.getElementById('exerNum').innerText = allExercises.length;
};
document.getElementById('allQuestionsButton').addEventListener('click', outoputExerNum);

function outoputQuestionsNum() {
  let result = 0;
  allExercises.forEach(obj => result += obj.Num.length )
  document.getElementById('allQuestions').innerText = result;
}
