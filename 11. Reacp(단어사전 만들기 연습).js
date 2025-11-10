"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testObj = {
    "first": "1",
    true: "2", // 실제 key는 "true"
    11111: "3" // 실제 key는 "11111"
};
const testObj2 = {
    1: "one",
    2: "two",
    a: "thr" // [Error] Object literal may only specify known properties, and 'a' does not exist in type 'ObjType2'
};
class Word {
    constructor(term, // 수정 불가
    def // 수정 불가
    ) {
        this.term = term;
        this.def = def;
    }
}
class Dict {
    // 위의 [Error]를 해결하기 위해 constructor에서 수동으로 초기화
    constructor() {
        this.words = {};
    }
    add(word) {
        // 아직 사전에 존재하지 않는 단어
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    getDef(term) {
        if (this.words[term] !== undefined) {
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
