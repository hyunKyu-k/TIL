{
    /**
     * ! Javascript
     * * Primitive 원시타입: number, string, boolean, bigint, symbol, null, undefined
     * * Object: function, array ...
     */

    // number
    const num: number = 1

    // string
    const str: string = 'hello';

    // boolean
    const bool: boolean = false;

    // undefined
    let name: undefined; //! NO
    let age: number | undefined;
    age = undefined;
    age = 1;

    function find(): number | undefined {
        return 1
    }

    // null
    let person: null; //! NO
    let person2: string | null

    // unknown //! NO
    let notSure: unknown = 0;
    notSure = 'hello';
    notSure = true;

    // any //! NO
    let anything: any = 0;
    anything = 'hello';
    anything = true;

    // void 함수에서 아무것도 리턴하지 않을 때
    function print(): void {
        console.log('hello');
        return;
    }
    let unusable: void = undefined //! NO

    // never 리턴하지 않는 함수, Error를 보낼 때, 또는 무한루프에만 사용
    function throwError(message: string): never {
        //* message -> sever (log)
        throw new Error(message);

        while (true) { }
    }

    // Object 어떤 타입의 데이터를 담을 수 있다.
    let obj: object; //! NO
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({ name: 'fabian' })
    acceptSomeObject({ animal: 'dog' })
}