'use strict'
// Please don't delete the 'use strict' line above

const allExercise = [
    {
        exercisesID: 1,
        dayNo: "day1",
        date: "2023/07/05",
        title: "プログラミングの基礎",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4, 5],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6371/efe0bc8w3hwk",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 2,
        dayNo: "day1",
        date: "2023/07/05",
        title: "開発環境",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4, 5],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6371/m7g5nr9n1nsl",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 3,
        dayNo: "day1",
        date: "2023/07/05",
        title: "コードの書き方",
        name: "その他",
        subName: "",
        No: [""],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6371/op1e36ahs8ge",
        assessment: 1,
        comment: "",
        tag: ["その他"],
    },
    {
        exercisesID: 4,
        dayNo: "day1",
        date: "2023/07/05",
        title: "変数入門",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6371/fl6hzat2gao0",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 5,
        dayNo: "day1",
        date: "2023/07/05",
        title: "変数入門",
        name: "中級演習",
        subName: "",
        No: [1, 2, 3, 4],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6371/fl6hzat2gao0",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 6,
        dayNo: "day1",
        date: "2023/07/05",
        title: "変数入門",
        name: "応用演習",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6371/fl6hzat2gao0",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 7,
        dayNo: "day1",
        date: "2023/07/05",
        title: "変数入門",
        name: "読み物📖",
        subName: "",
        No: [1, 2, 3, 4, 5],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6371/fl6hzat2gao0",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 8,
        dayNo: "day2",
        date: "2023/07/06",
        title: "変数入門 ウォーミングアップ",
        name: "ウォーミングアップ",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6373/6um5oqvzjbg8",
        assessment: 1,
        comment: "",
        tag: ["ウォーミングアップ"],
    },
    {
        exercisesID: 9,
        dayNo: "day2",
        date: "2023/07/06",
        title: "関数入門",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4, 5, 1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6373/61yyce1s2q9y",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 10,
        dayNo: "day2",
        date: "2023/07/06",
        title: "関数入門",
        name: "中級演習",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6373/61yyce1s2q9y",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 11,
        dayNo: "day2",
        date: "2023/07/06",
        title: "関数入門",
        name: "応用演習",
        subName: "",
        No: [1, 2, 3, 4],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6373/61yyce1s2q9y",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 12,
        dayNo: "day2",
        date: "2023/07/06",
        title: "関数入門",
        name: "理解度チェック",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6373/61yyce1s2q9y",
        assessment: 1,
        comment: "",
        tag: ["その他"],
    },
    {
        exercisesID: 13,
        dayNo: "day2",
        date: "2023/07/06",
        title: "関数入門",
        name: "読み物📖",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6373/61yyce1s2q9y",
        assessment: 1,
        comment: "",
        tag: ["その他"],
    },
    {
        exercisesID: 14,
        dayNo: "day2",
        date: "2023/07/06",
        title: "関数の構成要素",
        name: "読み物📖",
        subName: "",
        No: [],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6373/drs8vzs87rls",
        assessment: 1,
        comment: "",
        tag: ["その他"],
    },
    {
        exercisesID: 15,
        dayNo: "day3",
        date: "2023/07/07",
        title: "関数入門 ウォーミングアップ",
        name: "ウォーミングアップ",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/dayview/dig-fnd-18/20230707",
        assessment: 1,
        comment: "",
        tag: ["ウォーミングアップ"],
    },
    {
        exercisesID: 16,
        dayNo: "day3",
        date: "2023/07/07",
        title: "比較入門",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4, 5, 6],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6374/l5rf0hq0u9zs",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 17,
        dayNo: "day3",
        date: "2023/07/07",
        title: "比較入門",
        name: "中級演習",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6374/l5rf0hq0u9zs",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 18,
        dayNo: "day3",
        date: "2023/07/07",
        title: "比較入門",
        name: "応用演習",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6374/l5rf0hq0u9zs",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 19,
        dayNo: "day3",
        date: "2023/07/07",
        title: "比較入門",
        name: "ナイトメア問題 😈",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6374/l5rf0hq0u9zs",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 20,
        dayNo: "day3",
        date: "2023/07/07",
        title: "比較入門",
        name: "読み物📖",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6374/l5rf0hq0u9zs",
        assessment: 1,
        comment: "",
        tag: ["その他"],
    },
    {
        exercisesID: 21,
        dayNo: "day3",
        date: "2023/07/07",
        title: "インポスターシンドローム",
        name: "読み物📖",
        subName: "",
        No: [1, 2, 3, 4, 5, 6, 7, 8],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6374/yfl7rt6kdxzp",
        assessment: 1,
        comment: "",
        tag: ["その他"],
    },
    {
        exercisesID: 22,
        dayNo: "day3",
        date: "2023/07/07",
        title: "ミニマリストの自己紹介Webページを作ってみよう！",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4, 5],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6374/c6wb9ph6elr5",
        assessment: 1,
        comment: "",
        tag: ["その他", "HTML"],
    },
    {
        exercisesID: 23,
        dayNo: "day4",
        date: "2023/07/10",
        title: "比較入門 ウォーミングアップ",
        name: "ウォーミングアップ",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6375/7bet92e51meb",
        assessment: 1,
        comment: "",
        tag: ["ウォーミングアップ"],
    },
    {
        exercisesID: 24,
        dayNo: "day4",
        date: "2023/07/10",
        title: "条件分岐入門",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4, 5, 6, 7],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6375/1gbav7h8chsx",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 25,
        dayNo: "day4",
        date: "2023/07/10",
        title: "条件分岐入門",
        name: "中級演習",
        subName: "",
        No: [1, 2, 3, 4, 1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6375/1gbav7h8chsx",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 26,
        dayNo: "day4",
        date: "2023/07/10",
        title: "条件分岐入門",
        name: "応用演習",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6375/1gbav7h8chsx",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 27,
        dayNo: "day4",
        date: "2023/07/10",
        title: "条件分岐入門",
        name: "読み物📖",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6375/1gbav7h8chsx",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 28,
        dayNo: "day5",
        date: "2023/07/11",
        title: "条件分岐入門 ウォーミングアップ",
        name: "ウォーミングアップ",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6376/smuj8vauicfq",
        assessment: 1,
        comment: "",
        tag: ["ウォーミングアップ"],
    },
    {
        exercisesID: 29,
        dayNo: "day5",
        date: "2023/07/11",
        title: "テスト駆動開発（Test-driven Development [TDD]）",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4, 5, 6],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6376/nayhwcsimsza",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 30,
        dayNo: "day5",
        date: "2023/07/11",
        title: "テスト駆動開発（Test-driven Development [TDD]）",
        name: "中級演習",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6376/nayhwcsimsza",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 31,
        dayNo: "day5",
        date: "2023/07/11",
        title: "テスト駆動開発（Test-driven Development [TDD]）",
        name: "応用演習",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6376/nayhwcsimsza",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 32,
        dayNo: "day5",
        date: "2023/07/11",
        title: "テスト駆動開発（Test-driven Development [TDD]）",
        name: "ナイトメア問題 😈",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6376/nayhwcsimsza",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 33,
        dayNo: "day5",
        date: "2023/07/11",
        title: "コードスタイル",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4, 5],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6376/8rbylmz7jfc3",
        assessment: 1,
        comment: "",
        tag: ["CSS"],
    },
    {
        exercisesID: 34,
        dayNo: "day5",
        date: "2023/07/11",
        title: "コードスタイル",
        name: "中級演習",
        subName: "",
        No: [1, 2, 3, 4],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6376/8rbylmz7jfc3",
        assessment: 1,
        comment: "",
        tag: ["CSS"],
    },
    {
        exercisesID: 35,
        dayNo: "day5",
        date: "2023/07/11",
        title: "コードスタイル",
        name: "応用演習",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6376/8rbylmz7jfc3",
        assessment: 1,
        comment: "",
        tag: ["CSS"],
    },
    {
        exercisesID: 36,
        dayNo: "day6",
        date: "2023/07/12",
        title: "テスト駆動開発（Test-driven Development [TDD]） Warmup",
        name: "ウォーミングアップ",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6377/d2mrsoh25fue",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 37,
        dayNo: "day6",
        date: "2023/07/12",
        title: "続・条件分岐",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6377/ibp6lo13d3y8",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 38,
        dayNo: "day6",
        date: "2023/07/12",
        title: "続・条件分岐",
        name: "中級演習",
        subName: "",
        No: [1, 2, 3, 4, 5],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6377/ibp6lo13d3y8",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 39,
        dayNo: "day6",
        date: "2023/07/12",
        title: "続・条件分岐",
        name: "応用演習",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6377/ibp6lo13d3y8",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 40,
        dayNo: "day6",
        date: "2023/07/12",
        title: "関数（Functions）, 比較（Comparisons）, 条件分岐（Conditionals）レビュー",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6377/q0g5aezam19d",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 41,
        dayNo: "day6",
        date: "2023/07/12",
        title: "関数（Functions）, 比較（Comparisons）, 条件分岐（Conditionals）レビュー",
        name: "中級演習",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6377/q0g5aezam19d",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 42,
        dayNo: "day6",
        date: "2023/07/12",
        title: "関数（Functions）, 比較（Comparisons）, 条件分岐（Conditionals）レビュー",
        name: "応用演習",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6377/q0g5aezam19d",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 43,
        dayNo: "day6",
        date: "2023/07/12",
        title: "関数（Functions）, 比較（Comparisons）, 条件分岐（Conditionals）レビュー",
        name: "ナイトメア問題 😈",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6377/q0g5aezam19d",
        assessment: 1,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 44,
        dayNo: "day7",
        date: "2023/07/13",
        title: "アセスメント1",
        name: "課題",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6378/44hta7jmoagz",
        assessment: 1,
        comment: "",
        tag: ["アセスメント"],
    },
    {
        exercisesID: 45,
        dayNo: "day7",
        date: "2023/07/13",
        title: "配列入門",
        name: "確認",
        subName: "",
        No: [1, 2, 3, 4],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6378/jifwezh55pv3",
        assessment: 2,
        comment: "",
        tag: ["その他"],
    },
    {
        exercisesID: 46,
        dayNo: "day7",
        date: "2023/07/13",
        title: "配列入門",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4, 5],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6378/jifwezh55pv3",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 47,
        dayNo: "day7",
        date: "2023/07/13",
        title: "配列入門",
        name: "中級演習",
        subName: "",
        No: [1, 2, 3, 4],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6378/jifwezh55pv3",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 48,
        dayNo: "day7",
        date: "2023/07/13",
        title: "配列入門",
        name: "応用演習",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6378/jifwezh55pv3",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 49,
        dayNo: "day7",
        date: "2023/07/13",
        title: "配列入門",
        name: "ビルトイン・メソッドにコールバック関数を使用する",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6378/jifwezh55pv3",
        assessment: 2,
        comment: "",
        tag: ["その他"],
    },
    {
        exercisesID: 50,
        dayNo: "day7",
        date: "2023/07/13",
        title: "配列入門",
        name: "ナイトメア問題 😈",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6378/jifwezh55pv3",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 51,
        dayNo: "day8",
        date: "2023/07/14",
        title: "ウォーミングアップ",
        name: "ウォーミングアップ",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/dayview/dig-fnd-18/20230714",
        assessment: 2,
        comment: "",
        tag: ["ウォーミングアップ"],
    },
    {
        exercisesID: 52,
        dayNo: "day8",
        date: "2023/07/14",
        title: "for..of ループ",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4, 5, 6, 7],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6379/8w4nr7w4jose",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 53,
        dayNo: "day8",
        date: "2023/07/14",
        title: "for..of ループ",
        name: "中級演習",
        subName: "",
        No: [1, 2, 3, 4],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6379/8w4nr7w4jose",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 54,
        dayNo: "day8",
        date: "2023/07/14",
        title: "for..of ループ",
        name: "応用演習",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6379/8w4nr7w4jose",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 55,
        dayNo: "day8",
        date: "2023/07/14",
        title: "for..of ループ",
        name: "ナイトメア問題 😈",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6379/8w4nr7w4jose",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 56,
        dayNo: "day8",
        date: "2023/07/14",
        title: "TDD（テスト駆動開発）の復習",
        name: "おさらい",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6379/5h19dp4ga0qd",
        assessment: 2,
        comment: "",
        tag: ["その他", "TDD"],
    },
    {
        exercisesID: 57,
        dayNo: "day8",
        date: "2023/07/14",
        title: "HTML + CSS",
        name: "演習",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6379/cmrigmoow4ez",
        assessment: 2,
        comment: "",
        tag: ["その他", "HTML", "CSS"],
    },
    {
        exercisesID: 58,
        dayNo: "day8",
        date: "2023/07/14",
        title: "HTML + CSS",
        name: "基本演習",
        subName: "",
        No: [1, 2, 3, 4, 5, 6],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6379/cmrigmoow4ez",
        assessment: 2,
        comment: "",
        tag: ["HTML", "CSS"],
    },
    {
        exercisesID: 59,
        dayNo: "day8",
        date: "2023/07/14",
        title: "HTML + CSS",
        name: "応用演習",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6379/cmrigmoow4ez",
        assessment: 2,
        comment: "",
        tag: ["HTML", "CSS"],
    },
    {
        exercisesID: 60,
        dayNo: "day8",
        date: "2023/07/14",
        title: "HTML + CSS",
        name: "読み物📖",
        subName: "",
        No: [1, 2, 3, 4, 5],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6379/cmrigmoow4ez",
        assessment: 2,
        comment: "",
        tag: ["HTML", "CSS"],
    },
    {
        exercisesID: 61,
        dayNo: "day9",
        date: "2023/07/18",
        title: "for..of ループ ウォーミングアップ",
        name: "ウォーミングアップ",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6380/glrrzzvzucbt",
        assessment: 2,
        comment: "",
        tag: ["ウォーミングアップ"],
    },
    {
        exercisesID: 62,
        dayNo: "day9",
        date: "2023/07/18",
        title: "オブジェクト入門",
        name: "確認",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6380/4f2erv9dkvzz",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 63,
        dayNo: "day9",
        date: "2023/07/18",
        title: "オブジェクト入門",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4, 5],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6380/4f2erv9dkvzz",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 64,
        dayNo: "day9",
        date: "2023/07/18",
        title: "オブジェクト入門",
        name: "中級演習",
        subName: "",
        No: [1, 1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6380/4f2erv9dkvzz",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 65,
        dayNo: "day9",
        date: "2023/07/18",
        title: "オブジェクト入門",
        name: "応用演習",
        subName: "",
        No: [1, 1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6380/4f2erv9dkvzz",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 66,
        dayNo: "day9",
        date: "2023/07/18",
        title: "スコープ",
        name: "基礎演習",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6380/w5zcgd6rqe3d",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 67,
        dayNo: "day9",
        date: "2023/07/18",
        title: "スコープ",
        name: "中級演習",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6380/w5zcgd6rqe3d",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 68,
        dayNo: "day10",
        date: "2023/07/19",
        title: "オブジェクト入門 ウォーミングアップ",
        name: "ウォーミングアップ",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6381/cfkk1iuldt2r",
        assessment: 2,
        comment: "",
        tag: ["ウォーミングアップ"],
    },
    {
        exercisesID: 69,
        dayNo: "day10",
        date: "2023/07/19",
        title: "for...in ループ",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4, 5, 6, 7],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6381/f4wf78xodgdg",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 70,
        dayNo: "day10",
        date: "2023/07/19",
        title: "for...in ループ",
        name: "基礎演習",
        subName: "復習: 配列とオブジェクト",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6381/f4wf78xodgdg",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 71,
        dayNo: "day10",
        date: "2023/07/19",
        title: "for...in ループ",
        name: "応用演習",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6381/f4wf78xodgdg",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 72,
        dayNo: "day10",
        date: "2023/07/19",
        title: "for...in ループ",
        name: "ナイトメア問題 😈",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6381/f4wf78xodgdg",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 73,
        dayNo: "day10",
        date: "2023/07/19",
        title: "参照渡しと値渡し",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4, 5, 6],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6381/pitij3xbr977",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 74,
        dayNo: "day10",
        date: "2023/07/19",
        title: "参照渡しと値渡し",
        name: "読み物📖",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6381/pitij3xbr977",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 75,
        dayNo: "day11",
        date: "2023/07/20",
        title: "for...in ループ ウォーミングアップ",
        name: "ウォーミングアップ",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6382/xi0tv7njed8d",
        assessment: 2,
        comment: "",
        tag: ["ウォーミングアップ"],
    },
    {
        exercisesID: 76,
        dayNo: "day11",
        date: "2023/07/20",
        title: "for...in ループ ウォーミングアップ",
        name: "ウォーミングアップ拡張",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/dayview/dig-fnd-18/20230720",
        assessment: 2,
        comment: "",
        tag: ["ウォーミングアップ"],
    },
    {
        exercisesID: 77,
        dayNo: "day11",
        date: "2023/07/20",
        title: "while ループと for ループ",
        name: "確認",
        subName: "",
        No: [1, 2, 3, 4],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6382/ypcyru0kz4tu",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 78,
        dayNo: "day11",
        date: "2023/07/20",
        title: "while ループと for ループ",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4, 5, 6],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6382/ypcyru0kz4tu",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 79,
        dayNo: "day11",
        date: "2023/07/20",
        title: "while ループと for ループ",
        name: "中級演習",
        subName: "",
        No: [1, 2, 3, 4, 5, 6],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6382/ypcyru0kz4tu",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 80,
        dayNo: "day11",
        date: "2023/07/20",
        title: "while ループと for ループ",
        name: "応用演習",
        subName: "",
        No: [1, 2, 3, 4],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6382/ypcyru0kz4tu",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 81,
        dayNo: "day11",
        date: "2023/07/20",
        title: "while ループと for ループ",
        name: "ナイトメア問題 😈",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6382/ypcyru0kz4tu",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 82,
        dayNo: "day12",
        date: "2023/07/21",
        title: "値としての関数",
        name: "確認",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6383/hgr53axohp0q",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 83,
        dayNo: "day12",
        date: "2023/07/21",
        title: "値としての関数",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6383/hgr53axohp0q",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 84,
        dayNo: "day12",
        date: "2023/07/21",
        title: "値としての関数",
        name: "中級演習",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6383/hgr53axohp0q",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 85,
        dayNo: "day12",
        date: "2023/07/21",
        title: "値としての関数",
        name: "読み物📖",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6383/hgr53axohp0q",
        assessment: 2,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 86,
        dayNo: "day13",
        date: "2023/07/24",
        title: "アセスメント2",
        name: "課題",
        subName: "",
        No: [1, 2, 3, 4, 5],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6384/45u7ihk6uvwv",
        assessment: 2,
        comment: "",
        tag: ["アセスメント"],
    },
    {
        exercisesID: 87,
        dayNo: "day13",
        date: "2023/07/24",
        title: "Closures（クロージャ）",
        name: "確認",
        subName: "ペア演習 - 復習",
        No: [1, 2, 3, 4],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6384/eol3s11mmiuh",
        assessment: 3,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 88,
        dayNo: "day13",
        date: "2023/07/24",
        title: "Closures（クロージャ）",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3, 4],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6384/eol3s11mmiuh",
        assessment: 3,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 89,
        dayNo: "day13",
        date: "2023/07/24",
        title: "Closures（クロージャ）",
        name: "中級演習",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6384/eol3s11mmiuh",
        assessment: 3,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 90,
        dayNo: "day13",
        date: "2023/07/24",
        title: "Closures（クロージャ）",
        name: "ナイトメア問題 😈",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6384/eol3s11mmiuh",
        assessment: 3,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 91,
        dayNo: "day14",
        date: "2023/07/25",
        title: "Closures（クロージャ） ウォーミングアップ",
        name: "ウォーミングアップ",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6385/0duoq1borh0x",
        assessment: 3,
        comment: "",
        tag: ["ウォーミングアップ"],
    },
    {
        exercisesID: 92,
        dayNo: "day14",
        date: "2023/07/25",
        title: "メソッド",
        name: "確認",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6385/gcqlab94lx6d",
        assessment: 3,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 93,
        dayNo: "day14",
        date: "2023/07/25",
        title: "メソッド",
        name: "基本演習",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6385/gcqlab94lx6d",
        assessment: 3,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 94,
        dayNo: "day14",
        date: "2023/07/25",
        title: "メソッド",
        name: "中級演習",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6385/gcqlab94lx6d",
        assessment: 3,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 95,
        dayNo: "day14",
        date: "2023/07/25",
        title: "メソッド",
        name: "応用演習",
        subName: "",
        No: [1, 2, 3, 4],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6385/gcqlab94lx6d",
        assessment: 3,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 96,
        dayNo: "day14",
        date: "2023/07/25",
        title: "DOM",
        name: "確認",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6385/8l1tq0m5uy0m",
        assessment: 3,
        comment: "",
        tag: ["HTML", "CSS"],
    },
    {
        exercisesID: 97,
        dayNo: "day14",
        date: "2023/07/25",
        title: "DOM",
        name: "基礎演習",
        subName: "DOM の操作",
        No: [1, 2, 3, 4],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6385/8l1tq0m5uy0m",
        assessment: 3,
        comment: "",
        tag: ["HTML", "CSS"],
    },
    {
        exercisesID: 98,
        dayNo: "day14",
        date: "2023/07/25",
        title: "DOM",
        name: "中級演習",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6385/8l1tq0m5uy0m",
        assessment: 3,
        comment: "",
        tag: ["HTML", "CSS"],
    },
    {
        exercisesID: 99,
        dayNo: "day14",
        date: "2023/07/25",
        title: "DOM",
        name: "応用演習",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6385/8l1tq0m5uy0m",
        assessment: 3,
        comment: "",
        tag: ["HTML", "CSS"],
    },
    {
        exercisesID: 100,
        dayNo: "day14",
        date: "2023/07/25",
        title: "DOM",
        name: "読み物📖",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6385/8l1tq0m5uy0m",
        assessment: 3,
        comment: "",
        tag: ["HTML", "CSS"],
    },
    {
        exercisesID: 101,
        dayNo: "day15",
        date: "2023/07/26",
        title: "DOM ウォーミングアップ",
        name: "ウォーミングアップ",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6386/kc0bu8jsje11",
        assessment: 3,
        comment: "",
        tag: ["ウォーミングアップ","HTML", "CSS"],
    },
    {
        exercisesID: 102,
        dayNo: "day15",
        date: "2023/07/26",
        title: "CSS と JavaScript",
        name: "基礎演習",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6386/ufclvvi2tz1q",
        assessment: 3,
        comment: "",
        tag: ["HTML", "CSS"],
    },
    {
        exercisesID: 103,
        dayNo: "day15",
        date: "2023/07/26",
        title: "CSS と JavaScript",
        name: "中級演習",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6386/ufclvvi2tz1q",
        assessment: 3,
        comment: "",
        tag: ["HTML", "CSS"],
    },
    {
        exercisesID: 104,
        dayNo: "day15",
        date: "2023/07/26",
        title: "CSS と JavaScript",
        name: "応用演習",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6386/ufclvvi2tz1q",
        assessment: 3,
        comment: "",
        tag: ["HTML", "CSS"],
    },
    {
        exercisesID: 105,
        dayNo: "day15",
        date: "2023/07/26",
        title: "DOM イベント  - アクティビティ「アリゲーター」",
        name: "応用演習",
        subName: "",
        No: [1, 2, 3, 4, 5, 6, 7, 8],
        URL: "https://docs.google.com/document/d/e/2PACX-1vSf8yZX16dAPFEl5z_cVbfREsbdrUo_jy5f2wQp5uHKrmkC1BRAmhcvcxM2QD4YV9WoAsdy6rG-OIg7/pub",
        assessment: 3,
        comment: "https://dig.codechrysalis.io/dayview/dig-fnd-18/20230726",
        tag: ["HTML", "CSS"],
    },
    {
        exercisesID: 106,
        dayNo: "day16",
        date: "2023/07/27",
        title: "JavaScript ライブラリ",
        name: "中級演習",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6387/v3b2cklik5i7",
        assessment: 3,
        comment: "演習に入る前にリンク先で「Lodashを使う準備」を実施してください。",
        tag: ["ライブラリ"],
    },
    {
        exercisesID: 107,
        dayNo: "day16",
        date: "2023/07/27",
        title: "JavaScript ライブラリ",
        name: "ナイトメア問題 😈",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6387/v3b2cklik5i7",
        assessment: 3,
        comment: "一番難しい演習かもしれません。ファイトです😎",
        tag: [],
    },
    {
        exercisesID: 108,
        dayNo: "day17",
        date: "2023/07/28",
        title: "高階関数入門",
        name: "基礎演習",
        subName: "",
        No: [1, 2, 3],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6388/h2rjdkvlt3et",
        assessment: 3,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 109,
        dayNo: "day17",
        date: "2023/07/28",
        title: "高階関数入門",
        name: "中級演習",
        subName: "",
        No: [1],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6388/h2rjdkvlt3et",
        assessment: 3,
        comment: "",
        tag: [],
    },
    {
        exercisesID: 110,
        dayNo: "day17",
        date: "2023/07/28",
        title: "高階関数入門",
        name: "応用演習",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6388/h2rjdkvlt3et",
        assessment: 3,
        comment: "",
        tag: ["関数"],
    },
    {
        exercisesID: 111,
        dayNo: "day17",
        date: "2023/07/28",
        title: "ポケモンプロジェクト",
        name: "基本演習",
        subName: "",
        No: [1, 2, 3, 4, 5, 6],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6388/3je6k4d69qbv",
        assessment: 3,
        comment: "演習に入る前にリンク先で「準備作業」を実施してください。",
        tag: ["関数", "メソッド"],
    },
    {
        exercisesID: 112,
        dayNo: "day17",
        date: "2023/07/28",
        title: "ポケモンプロジェクト",
        name: "中級演習",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6388/3je6k4d69qbv",
        assessment: 3,
        comment: "演習に入る前にリンク先で「準備作業」を実施してください。",
        tag: ["関数", "メソッド"],
    },
    {
        exercisesID: 113,
        dayNo: "day17",
        date: "2023/07/28",
        title: "ポケモンプロジェクト",
        name: "応用演習",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6388/3je6k4d69qbv",
        assessment: 3,
        comment: "演習に入る前にリンク先で「準備作業」を実施してください。",
        tag: ["関数", "メソッド"],
    },
    {
        exercisesID: 114,
        dayNo: "day17",
        date: "2023/07/28",
        title: "ポケモンプロジェクト",
        name: "読み物📖",
        subName: "",
        No: [1, 2],
        URL: "https://dig.codechrysalis.io/view/dig-fnd-18/6388/3je6k4d69qbv",
        assessment: 3,
        comment: "",
        tag: ["関数", "メソッド"],
    },
];
