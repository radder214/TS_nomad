export {};

/**
 * generic의 다양한 사용 방법을 알아보자
 */
// 1.
function superPrint<T>(a :T[]) {
    return a[0];
}

const a = superPrint([true, false, true]);
const b = superPrint(["a", "b", "c"]);
const c = superPrint([1, 2, true, false, "hello"]);
// 아래와 같이 type을 직접 명시해도 상관은 없음
// but TS가 알아서 type을 유추하게 두자
const d = superPrint<number>([1, 2, 3, 4]);
// ==========================================================================================
// ==========================================================================================
// 2.
type Player<E> = {
    name :string
    extraInfo :E
}
// (1).
const nico :Player<{favFood :string}> = {
    name : "nico",
    extraInfo : {favFood : "hamburger"}
}

// (2).
type NicoPlayer = Player<{favFood :string}>;
const nico2 :NicoPlayer = {
    name : "nico",
    extraInfo : {favFood : "chicken"}
}

// (3).
type NicoExtra = {
    favFood :string
}
type NicoPlayer2 = Player<NicoExtra>;
const nico3 :NicoPlayer = {
    name : "nico2",
    extraInfo : {favFood : "lemon"}
}

// (4).
const lynn :Player<null> = {
    name : "lynn",
    extraInfo : null
}
// ==========================================================================================
// ==========================================================================================
// 3.
type A = Array<number>; // Array interface가 generic을 받는다.
let arr :A = [1, 2, 3, 4];

// (arr :Array<number>) = (arr :number[])
function printAllNumbers(arr :Array<number>) {
    return 0;
}