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
// =========================================================================================================
// =========================================================================================================
/**
 * generic 하나 더 추가
 */
type genericTwo = <T, M>(arr :T[], b: M) => T;

// "왜 파라미터가 (a) 밖에 없지? (a, b) 2개여야 하는거 아냐?" 라는 생각이 들것이다.
// 그때는 typescript의 fewer parameter compatible을 검색해보자
// 아래 공식 문서 사이트 접속 후 ctrl + f 로 fewer parameters 검색
// https://www.typescriptlang.org/docs/handbook/2/functions.html#construct-signatures
const genericTwoFn :genericTwo = (a) => a[0];

// generic 대신 any를 써도 Error 자체는 발생하지 않는다.
// 하지만 그러면 TS를 쓰는 의미가 없다.
const a_genericTwo = genericTwoFn([1, 2, 3, 4], "x");
const b_genericTwo = genericTwoFn([true, false, true], 1);
const c_genericTwo = genericTwoFn(["a", "b", "c"], false);
const d_genericTwo = genericTwoFn([1, 2, true, false, "hello"], []);