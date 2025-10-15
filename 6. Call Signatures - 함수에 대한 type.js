"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1.
const add = (a, b) => a + b;
// [동일]
// const add = (a :number, b :number) :number => a + b;
add(1, 2);
// 2.
const add2 = function (x, y) {
    return x + y;
};
add2(3, 4);
// 3.
// 아래와 같은 '함수 선언문'에서는 Call Signatures 사용 불가
// type을 직접 명시해줘야 함
function add3(a, b) {
    return a + b;
}
