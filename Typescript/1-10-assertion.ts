{
    /**
     * ! Type Assertions 그렇게 좋은 방법은 아닙니다
     * * 타입을 정확하게 100% 확신할 때만 써야하는 방법입니다.
     */

    function jsStrFunc(): any {
        return 'hello'
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length)

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); //! NO

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    numbers!.push(2) //! --> 값을 확신할 때 !를 사용해서 무조건 null이 아니라고 하는 것

    const button = document.querySelector('class')!
    const button2 = document.querySelector('class')
    if (button2) {
        button2.nodeValue
    }
}