export {};

// [1.]
/**
 * 1. type ObjType은 객체 타입
 * 2. 객체의 key는 string 타입
 * 3. key의 value 또한 string 타입
 */
type ObjType = {
    // 반드시 key라고 적을 필요 없음, 마음대로 작명 가능
    [key :string] : string
}

const testObj :ObjType = {
    "first" : "1",
    true    : "2",  // 실제 key는 "true"
    11111   : "3"   // 실제 key는 "11111"
}
/**
 * (true : "2"), (11111 : "3") => key에 number, boolean이 오는데 문제가 없는 이유
     * TS에서 객체의 key는 항상 문자열(string) or 심볼(symbol)
     * number, boolean 타입의 key로 써도 자동으로 string으로 변환된다.
 */

// [2.]
/**
 * 숫자 전용 key를 원하면 ObjType2와 같이 작성하면 된다.
 * 물론 결과적으로 1, 2 key 모두 문자열로 변환되지만(1 -> "1", 2 -> "2") 타입 체크는 number 기준으로 이뤄진다.
 */
type ObjType2 = {
    [key :number] : string
}
const testObj2 :ObjType2 = {
    1 : "one",
    2 : "two",
    a : "thr" // [Error] Object literal may only specify known properties, and 'a' does not exist in type 'ObjType2'
}
// ===========================================================================================
// ##################################################################
// ####################### 단어 사전 만들기 연습 #######################
// ##################################################################
type Words = {
    [key :string] : string
}

class Word {
    constructor(
        public readonly term :string,   // 수정 불가
        public readonly def  :string    // 수정 불가
    ) {}
}

class Dict {
    // construct에서 직접 초기화 되지 않는 property
    // [Error] Property 'words' has no initializer and is not definitely assigned in the constructor.
    private words :Words;
    
    // 위의 [Error]를 해결하기 위해 constructor에서 수동으로 초기화
    constructor() {
        this.words = {};
    }

    add(word :Word) { // class를 type처럼 사용할 수 있다. parameter가 Word class의 인스턴스로 취급된다.
        // 아직 사전에 존재하지 않는 단어
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }

    getDef(term :string) : string | undefined {
        if(this.words[term] !== undefined) {
            return this.words[term];
        }
        return undefined;
    }
    
    // JS에도 static은 있다.
    static hello() {
        return "hello";
    }
}

const kimchi = new Word("kimchi", "korean food");
const dict = new Dict();
dict.add(kimchi);
console.log(dict);
console.log(dict.getDef("kimchi"));
console.log(Dict.hello);
console.log(Dict.hello());