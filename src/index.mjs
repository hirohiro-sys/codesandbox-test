// /**const,let */
// var val1 = "var変数"
// console.log(val1)
// val1 = "上書き"
// console.log(val1)
// var val1 = "varを再設定"
// console.log(val1)
//  varは上書き再設定可能

// let val2 = "let変数"
// console.log(val2)
// val2 = "上書き"
// console.log(val2)
// let val2 = "再宣言"
// letは上書きができるけど再宣言できない

// const  val3 = "const変数";
// console.log(val3);
// val3 = "上書き";
// const val3 = "再宣言";
//constは上書きも再宣言もできない
//constのオブジェクトはプロパティの変更追加可能
// const val4 = {
//     name : "ひろ",
//     age :"21",
// };
// console.log(val4);
// val4.name = "jak";
// val4.addres = "千葉";
// console.log(val4);
//constの配列も変更や追加可能
// const val5 = ["dog", "cat"];
// val[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列
//従来の方法
// const name = "ひろかず";
// const age = 21;
// const message1 = "私の名前は" + name + "です。年齢は" * age + "です";
// console.log(message1);
// テンプレート文字列を使うと
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);
//  ``の中に${}で従来より簡潔に書ける

//  アロー関数
// 従来の関数
// const hunc1 = function (str) {
//   return str;
// };
// console.log(hunc1("hirokazu"));
// アロー関数でかくと
// const func2 = (str) => str;
// console.log(func2("hirokazusan"));

// const func3 = (num1,num2) => {
//     return num1 + num2;
// }
// console.log(func3(1,3));
// アロー関数は色々な記述法がある

// 分割代入
// const myProfile = {
//     name: "洋和",
//     age: 21,
// };
// const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message3);

// const {name, age} = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です`;

// const myProfile = ["hiro", 21];
// const message5 = `name is ${myProfile[0]}です。年齢は${myProfile[1]}さいです。`;
// const [name, age] = myProfile;
// const message6 = `名前は${name}です。年齢は${age}です`;
// consolo.log(message6);

/**
 デフォルト値
 引数に何も入れずに関数を実行するとデフォルトの値が出力される。自分で設定も可能 */
//  const sayHello = (name = "ゲスト") => console.log(`こんちは${name}さん`);
//  sayHello();

/**
 * スプレッド構文
 */
//配列展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr4);
// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

//スプレッド構文でコピーした配列を変更しても以前の配列は影響を受けないですむ
// イコールでコピーすると二つとも値が変わってしまう

/**
 * mapやfilterを使った配列の処理
 */
// const numArr = ["かと","hiro","tanak"];
// for (let index = 0; index<numArr.length; index++) {
//     console.log(numArr[index]);
// }

// const nameArr = nameArr.map((name)=> {
//     return name;
// })
// console.log(nameArr);
// nameArr.map((name)=>console.log(`${index + 1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((name)=>{
//     return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNumArr = nameArr.map((name)=>{
//     if (name=="かと") {
//         return name
//     } else {
//         return `${name}さん`
//     }
// })
// console.log(newNumArr);

/**
 * 三項演算子
 */
//ある条件 ? 条件がTrueの時: 条件がFalseの時
// const val1 = 1>0 ? 'trueです' : 'falseです';
// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// consolo.log(formattedNum);

// const checkSum = (num1,num2) => {
//     return num1 + num2 > 100 ? "100を超えてる" : "許容する";
// }
// console.log(checkSum(50,60));
// pythonの内包表記みたいな感じ

/**
 * 論理演算子の本当の意味
 */
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//     console.log("どっちかがtrue");
// }

// || は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額み設定";
// console.log(fee)

// &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);

//　論理演算子の本当の意味を理解しておく

//ここまでがモダンjavascriptの基礎