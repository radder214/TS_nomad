export {};

class Player {
    /**
        constructor(firstName, lastName) {
            this.firstName = firstName;
        }
     * JS처럼 this.xxx = xxx; 부분 작성할 필요(X)
     * constructor에 parameter만 넣어주면 TS가 알아서 이 부분을 처리한다.(하단 참고)
     */
    constructor(
        private firstName :string,  // 접근 제한자는 TS에서만 사용 가능, JS는 없음
        private lastName :string,   // TS 접근 제한자는 public, protected, private 세 가지 종류만 있음
        public nickname :string
    ) {}
}

const nico = new Player("nico", "las", "니꼬");
nico.nickname; // private인 다른 멤버변수 접근 불가(firstName, lastName)
// ====================================================================================
/**
 * [추상 클래스]
 * 다른 클래스가 상속받을 수 있는 클래스
 * 추상 클래스만으로는 [new 인스턴스]를 만들 수 없다.(interface도 동일)
 * 참고로 JS에는 abstract 키워드가 없다.
 */
abstract class User {
    constructor(
        private firstName :string,
        private lastName :string,
        public nickname :string,
        protected nickname2 :string
    ) {}

    // [일반 메소드]
    getFullName() :string { // :string 부분 없어도 TS가 알아서 type 추론함
        return `${this.firstName} ${this.lastName}`;
    }

    // [일반 메소드]
    /**
     * private으로 인해 nico2 인스턴스는 해당 method 접근 불가(nico2 인스턴스는 하단 참고)
     * private은 물론 protected로 설정해도 접근 불가(하단 주석 참고)
     * protected 멤버
        * 해당 클래스 내부와 그 클래스를 상속받은 자식 클래스 '내부'에서'만' 접근 가능, 외부 접근 불가
        * Player2 class '내'에서는 해당 method 접근 가능(Player2 => User class를 상속 받은 class, 하단 참고)
        * nico2 객체를 통해 '외부에서 직접 호출하는 것 또한 제한'된다.
     */
    private getFullName2() :string {
        return `${this.firstName} ${this.lastName}`;
    }

    // [추상 메소드]
    /**
     * 추상 클래스를 상속받는 모든 자식 클래스들이 '반드시' 구현해야하는 method(class 안에서 구현)
     * 메소드의 call signature만 작성(파라미터 타입, 반환 타입 등)
     * 당연한 얘기지만 추상 메소드는 private 접근제한자를 쓸 수 없다.
        * 추상 클래스로 [new 인스턴스]를 만들 수도 없는 상황에서
        * 자식 class가 접근을 해서 구현을 하려면 private 접근제한자를 쓰면 안 된다.
        * protected는 사용 가능
        * cf) protected abstract getNickname2() :void; => 이런 식으로 접근제한자 붙일 수 있음
     */
    abstract getNickname2() :void;
}

class Player2 extends User {
    getNickname2() {
        console.log(this.nickname2); // nickname2가 protected로 설정돼있어 접근 가능
    }
}

const nico2 = new Player2("nico", "las", "니꼬", "니2꼬");
nico2.getFullName();
// [Error] Property 'getFullName2' is private and only accessible within class 'User'
nico2.getFullName2();