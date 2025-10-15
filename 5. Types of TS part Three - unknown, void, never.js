"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ========================= [unknown] =========================
/**
 * 변수의 타입을 미리 알지 못 할 때 사용
 * ex) API 응답 값으로 어떤 값이 return 될지 모를 때
 * TS로부터 일종의 보호를 받는다. => 어떤 작업을 하기 전에 먼저 해당 변수의 타입을 확인해야 한다.
 */
let a;
let b = a.toUpperCase(); // [Error] 'a' is of type 'unknown'.
if (typeof a === 'string') {
    let b = a.toUpperCase(); // a의 타입이 string으로 확인됐기 때문에 가능
}
let c = a + 1; // [Error] 'a' is of type 'unknown'.
if (typeof a === 'number') {
    let c = a + 1; // a의 타입이 number로 확인됐기 때문에 가능
}
// ========================= [void] =========================
/**
 * 아무것도 return 하지 않는 함수를 대상으로 사용
 */
function hello() {
    console.log(`hello`);
}
const aa = hello();
aa.toUpperCase(); // [Error] Property 'toUpperCase' does not exist on type 'void'.
// ========================= [never] =========================
/**
 * never
    * 1. 함수가 절대 return 하지 않는 경우
        * 절대로 발생할 수 없는 값을 나타낼 때 사용 -> "여기서는 어떤 값도 올 수 없다."
    * 2. 모든 타입 분기를 처리했는지 검사할 때
    * 3. 타입 안정성을 더 강하게 보장할 때

 * ex) 함수가 정상적으로 값을 return 하지 않고
    * 1. 항상 Exception(예외)를 던진다.
    * 2. while(true) 같이 무한 루프에 빠진다.
    * 이런 경우에 never 타입을 쓴다. === "이 함수는 절대 값을 반환하지 않는다."
 */
// 1.
function hello2() {
    throw new Error(`never type`); // return 하지 않고 오류를 발생시키는 함수
}
// 2.
function hello3(name) {
    if (typeof name === "string") {
        name; // string type
    }
    else if (typeof name === "number") {
        name; // number type
    }
    else {
        name; // never type
        // "이 코드는 절대 실행되지 않아야 한다."
        // 타입이 올바르게 들어온다면 해당 block까지 올 일이 없기 때문(도달할 수 없는 코드, unreachable code)
        // 즉, 위의 if 문에서 '모든 경우를 다 처리했는지 확인'할 때 사용
    }
}
