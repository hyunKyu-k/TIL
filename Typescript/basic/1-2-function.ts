{
    // Javascript
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // Typescript
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }


    // Javascript 
    function jsFetchNum(id) {
        // ...code
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // Typescript
    function tsFetchNum(id: string): Promise<number> {
        // ...code
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    //*  Javascript => Typescript

    function printName(firstName: string, lastName: string) {
        console.log(firstName);
        console.log(lastName);
    }
    //! 두개의 인자를 모두 작성하지 않으면 에러가 발생하며 타입또한 정의 된 타입으로 지정 해야합니다.
    printName('steve', 'john');


    //* Optional parameter --> 인자에 ?를 사용한다면, 파라미터를 전달해도 되고, 전달 하지 않아도 됩니다.
    function printOrName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printOrName('steve', undefined);
    printOrName('steve')

    //* Default parameter --> 아무것도 전달하지 않아도 자동으로 기본값을 전달할 수 있습니다.
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();


    //* Rest parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((acc, curr) => acc + curr)
    }

    console.log(addNumbers(1, 2))
    console.log(addNumbers(1, 2, 3, 4, 5))
}