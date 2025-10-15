export {};

// [Implicit]
// TS의 Type Checker가 변수 a의 타입을 추론한다.(string)
let a = "hello";
a = "bye";  // 문제 없음
a = 123;    // string 타입 변수에 number를 할당했으므로 Error(JS는 문제없음)

// [Explicit]
// 1.
let b :boolean = true;

// 2.
let c :number[] = [1,2,3];
c.push(1);
c.push("1"); // Error

// 3.
type Player = {
    name: string
}
const player :Player = {
    name : "kim",
}
player.name = "lee";
player.name = 1;    // Error
player.hello();     // Property 'hello' does not exist on type 'Player'.