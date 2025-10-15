export {};

// ========================= [readonly] =========================
// 1.
type Name = string;
type Age = number;
type Player = {
    readonly name :Name,
    age? :Age
}
const playerMaker = (name :string) :Player => ({name}); // = {name : name}
const player1 = playerMaker("kim");
player1.name = "lee"; // [Error] Cannot assign to 'name' because it is a read-only property.
player1.age = 28;

// 2.
const numbers: readonly number[] = [1, 2, 3, 4];
numbers = [5, 6, 7, 8]; // [Error] Cannot assign to 'numbers' because it is a constant.
numbers.push(10);       // [Error] Property 'push' does not exist on type 'readonly number[]'.
numbers[0] = 10;        // [Error] Index signature in type 'readonly number[]' only permits reading.

// 3.
let numbers2: readonly number[] = [1, 2, 3, 4];
numbers2 = [5, 6, 7, 8];// 재할당 가능
numbers2.push(10);      // [Error] Property 'push' does not exist on type 'readonly number[]'.
numbers2[0] = 10;       // [Error] Index signature in type 'readonly number[]' only permits reading.
/**
 * [readonly 인데 [5, 6, 7, 8]로 재할당이 가능한 이유]
 * readonly number[] 의미
    * 배열의 '요소(element)'를 변경할 수 없다.
        * push, pop, splice(slice는 가능함), 인덱스 대입 등 불가
        * 즉, 배열 안의 내용 수정 불가
        * But, let으로 선언했기 때문에 변수 자체를 다른 배열로 재할당하는 것은 가능
        * const numbers 변수에서 numbers = [5, 6, 7, 8]를 했을 때 나타나는 오류 메시지도 type에 관한 것이아니라 "it is a constant"에 대한 내용이다.
    * 따라서 (배열 내용 수정 불가 && 재할당) 모두 막으려면 let이 아니라 const 사용
    * cf)
    * slice : '원본 배열을 변경하지 않고' 특정 범위의 요소를 잘라서 '새로운 배열'로 반환
    * splice : 원본 배열 '자체를 변경'하여 배열의 '기존 요소를 삭제하거나 교체하고 새로운 요소 추가' 가능
 */

// ========================= [Tuple] =========================
/**
 * Tuple
    * 최소한의 길이를 가져야 한다.
    * 특정 위치에 특정 타입이 있어야 한다.
 */
// 1.
/**
 * player는
 * 1. 3개의 요소가 있어야 하며
 * 2. 요소의 순서가 [string, number, boolean] 여야 한다.
 */
// [Error] Type '[]' is not assignable to type '[string, number, boolean]'. Source has 0 element(s) but target requires 3.
const player: [string, number, boolean] = [];

// 2.
const player2: [string, number, boolean] = ["kim", 30, true];
player2[0] = 123;   // [Error] Type 'number' is not assignable to type 'string'.

// 3.
// Tuple + readonly
const player3: readonly [string, number, boolean] = ["lee", 20, false];
// [Error] Cannot assign to '0' because it is a read-only property.
// cf) let으로 선언하면 재할당은 가능함
player3[0] = "123";

// ========================= [undefined, null, any] =========================
// optional type에 undefined가 쓰인다.
// ex) (age? :number) = (age :number | undefined)
let a :undefined = undefined;
let b :null = null;
let c :any = 10; // any : 모든 타입의 값이 올 수 있다. => TS를 빠져나오는 방법(TS의 모든 보호 장치를 비활성화)
c = "10";
c = true;
c = [1,2,3];
c = null;
c = undefined;

const d :any[] = [1, 2, 3, 4];
const e :any = true;
d + e; // any로 인해 Error가 발생하지 않고 작동한다.