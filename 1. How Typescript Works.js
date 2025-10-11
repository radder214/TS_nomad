"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [오류가 발생하는 TS 코드]
// ========== 1 ==========
var nico = {
    nickname: "nick"
};
// Property 'hello' does not exist on type '{ nickname: string; }'
nico.hello();
// ========== 2 ==========
// Operator '+' cannot be applied to types 'number[]' and 'boolean'.
[1, 2, 3, 4] + false;
// ========== 3 ==========
function divide(a, b) {
    return a / b;
}
// Expected 2 arguments, but got 1.
divide("xxxxxx");
