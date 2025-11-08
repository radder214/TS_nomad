export {};

// Call Signatures 짧게 작성
type Add0 = (a :number, b :number) => number;

// Call Signatures 길게 작성
// arrow function의 Overloading 때문에 해당 방법 필요
type Add1 = {
    (a :number, b :number)  :number // 얘가 하나의 Call Signatures
    (a :number, b :string)  :number // 얘가 하나의 Call Signatures
    (a :number, b :boolean) :number // 얘가 하나의 Call Signatures
}

// [Error] Operator '+' cannot be applied to types 'number' and 'string | number | boolean'.
const add :Add1 = (a, b) => a + b;

// 현재 add 함수는 (a :number, b :number), (a :number, b :string), (a :number, b :boolean) 모양 중 하나로 호출 가능
// TS에서 이것은 잘못된 호출, 따라서 아래와 같이 해줘야 한다.
const add_fix :Add1 = (a, b) => {
    // [a] (parameter) a: number
    // [b] (parameter) b: string | number | boolean
    if(typeof b === 'string') {
        return a;
    } else if(typeof b === 'boolean') {
        return 0;
    } else {
        return a + b;
    }
}
// ==========================================================================================
type Config = {
    path :string,
    state :object
}

type Push = {
    (path :string)  :void   // 얘가 하나의 Call Signatures
    // 위에서 정의한 Config Type을 여기서 사용
    (config :Config) :void  // 얘가 하나의 Call Signatures
}

const push :Push = (config) => {
    if(typeof config === 'string') {
        console.log(`config : ${config}`);
    } else {
        console.log(config.path, config.state);
    }
}
// ==========================================================================================
// Call Signatures의 파라미터 개수가 다를 때
type Add2 = {
    (a :number, b :number) :number              // 얘가 하나의 Call Signatures
    (a :number, b :number, c :number) :number   // 얘가 하나의 Call Signatures
}

const add2 :Add2 = (a, b, c?) => {
    // c parameter는 optional 이다.
    // 'c? :number'가 아니라 그냥 'c?' 만 적으면 unknown type이 된다.
    if(c && typeof c === 'number') {
        return a + b + c;
    }
    return a + b;
}

add2(1, 2);
add2(1, 2, 3);