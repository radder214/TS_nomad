export {};

type Player = {
    readonly name :string,
    age? : number
}
// 위에서 전용 type을 만든 것처럼 함수에 대한 type을 만들어보자
/**
 * Call Signatures
    * 함수 위에 마우스를 올렸을 때 보이는 것
    * 해당 함수의 인자의 타입 & 반환 타입을 알려준다.
 */
// [Call Signatures 타입 만들기]
type Add = (a :number, b :number) => number;
// 1.
const add :Add = (a, b) => a + b;
// [동일]
// const add = (a :number, b :number) :number => a + b;
add(1, 2);

// 2.
const add2 :Add = function(x, y) {
    return x + y;
}
add2(3, 4);

// 3.
// 아래와 같은 '함수 선언문'에서는 Call Signatures 사용 불가
// type을 직접 명시해줘야 함
function add3(a :number, b :number) :number {
    return a + b;
}