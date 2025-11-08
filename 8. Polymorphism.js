"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const superPrint = (arr) => {
    arr.forEach(i => console.log(i));
};
superPrint([1, 2, 3]);
superPrint([true, false, true]);
// [Error] No overload matches this call
// ["a", "b", "c"] 배열을 쓰자고 (arr :string[]):void 을 또 추가하기도 귀찮다.
superPrint(["a", "b", "c"]);
const superPrint2 = (arr) => arr[0];
const a = superPrint2([1, 2, 3]);
const b = superPrint2([true, false, true]);
const c = superPrint2(["a", "b", "c"]);
const d = superPrint2([1, 2, true, false]);
