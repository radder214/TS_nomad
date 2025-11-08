"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * generic의 다양한 사용 방법을 알아보자
 */
// 1.
function superPrint(a) {
    return a[0];
}
const a = superPrint([true, false, true]);
const b = superPrint(["a", "b", "c"]);
const c = superPrint([1, 2, true, false, "hello"]);
// 아래와 같이 type을 직접 명시해도 상관은 없음
// but TS가 알아서 type을 유추하게 두자
const d = superPrint([1, 2, 3, 4]);
// (1).
const nico = {
    name: "nico",
    extraInfo: { favFood: "hamburger" }
};
const nico2 = {
    name: "nico",
    extraInfo: { favFood: "chicken" }
};
const nico3 = {
    name: "nico2",
    extraInfo: { favFood: "lemon" }
};
// (4).
const lynn = {
    name: "lynn",
    extraInfo: null
};
let arr = [1, 2, 3, 4];
// (arr :Array<number>) = (arr :number[])
function printAllNumbers(arr) {
    return 0;
}
