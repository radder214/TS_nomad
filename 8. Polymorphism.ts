export {};

// overloading
type SuperPrint = {
    (arr :number[]) :void
    (arr :boolean[]) :void
}

const superPrint :SuperPrint = (arr) => {
    arr.forEach(i => console.log(i));
}

superPrint([1, 2, 3]);
superPrint([true, false, true]);

// [Error] No overload matches this call
// ["a", "b", "c"] 배열을 쓰자고 (arr :string[]):void 을 또 추가하기도 귀찮다.
superPrint(["a", "b", "c"]);

/**
 * 이럴 때 사용하는게 generic type(다형성)
 */
type SuperPrint2 = {
    // <TypePlaceholder> ==> TS한테 해당 Call Signature가 generic을 받는다는 것을 알려준다.
    // return type도 generic으로 설정 가능
    <TypePlaceholder>(arr :TypePlaceholder[]) :TypePlaceholder
    
    // generic 명은 마음대로 작명 가능, 이렇게 해도 상관 없음
    <T>(arr :T[]) :T
}

const superPrint2 :SuperPrint2 = (arr) => arr[0];

const a = superPrint2([1, 2, 3]);
const b = superPrint2([true, false, true]);
const c = superPrint2(["a", "b", "c"]);
const d = superPrint2([1, 2, true, false]);