{
    //* Type Inference 타입추론

    let text = 'hello';

    function print(message) {
        console.log(message)
    }
    print('hello')
    print(1)

    function printInference(message = 'hello') {
        console.log(message)
    }

    function add(x: number, y: number) {
        return x + y;
    }
    const result = add(1, 2);

    /**
     * 타입추론이 항상 좋은 것은 아닙니다.
     * 타입을 정확하게 명시하는 편이 좋지만, 원시타입의 경우는 타입생략을 해도 무방할 것 입니다.
     * 함수 리턴값이 void라면 괜찮겠지만, 리턴값의 타입을 명시해야한다면, 정확하게 명시하는 것이 올바른 방법입니다.
     */
}