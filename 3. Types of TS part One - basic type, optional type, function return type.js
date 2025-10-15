"use strict";
// ================== [basic type] ==================
let a = 1;
let b = "abc";
let c = true;
let a_array = [1, 2];
let b_array = ["abc", "def"];
let c_array = [true, false];
// ================== [optional type] ==================
// 1.
const player1 = {
    name: "kim"
};
// 'player1.age' is possibly 'undefined'.
if (player1.age < 10) { // Error
    console.log(player1);
}
// player1.age 자체가 존재하는지 먼저 확인해줘야 한다.
if (player1.age && player1.age < 10) {
    console.log(player1);
}
const player2 = {
    name: "lee",
    age: 28
};
// 'player2.age' is possibly 'undefined'.
if (player2.age < 10) { // Error
    console.log(player2);
}
// player2.age 자체가 존재하는지 먼저 확인해줘야 한다.
if (player2.age && player2.age < 10) {
    console.log(player2);
}
// age 속성이 없어도 생성 가능(optional이니까)
const player3 = {
    name: "park"
};
// ================== [함수 return 값의 타입 지정] ==================
// 함수 선언문
function playerMaker(name) {
    return {
        name // = name : name
    };
}
const player4 = playerMaker("choi");
player4.age = 31;
player4.money = 100; // Error [Property 'money' does not exist on type 'Player'.]
// arrow function
const playerMaker2 = (name) => {
    return {
        name // = name : name
    };
};
const player5 = playerMaker2("Jung");
player5.age = 31;
player5.money = 100; // Error [Property 'money' does not exist on type 'Player'.]
