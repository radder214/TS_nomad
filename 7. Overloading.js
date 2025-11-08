"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [Error] Operator '+' cannot be applied to types 'number' and 'string | number | boolean'.
const add = (a, b) => a + b;
// 현재 add 함수는 (a :number, b :number), (a :number, b :string), (a :number, b :boolean) 모양 중 하나로 호출 가능
// TS에서 이것은 잘못된 호출, 따라서 아래와 같이 해줘야 한다.
const add_fix = (a, b) => {
    // [a] (parameter) a: number
    // [b] (parameter) b: string | number | boolean
    if (typeof b === 'string') {
        return a;
    }
    else if (typeof b === 'boolean') {
        return 0;
    }
    else {
        return a + b;
    }
};
const push = (config) => {
    if (typeof config === 'string') {
        console.log(`config : ${config}`);
    }
    else {
        console.log(config.path, config.state);
    }
};
const add2 = (a, b, c) => {
    // c parameter는 optional 이다.
    // 'c? :number'가 아니라 그냥 'c?' 만 적으면 unknown type이 된다.
    if (c && typeof c === 'number') {
        return a + b + c;
    }
    return a + b;
};
add2(1, 2);
add2(1, 2, 3);
