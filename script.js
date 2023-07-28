'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//HTML基礎 2023-07-07 (day3)
//HTML + CSS 2023-07-14 (day8)
//プレゼン説明 2023-07-19 (day10)

//TDD（テスト駆動開発）
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("OK! Test PASSED.");
    } else {
      console.error("Test FAILED. Try again!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }
