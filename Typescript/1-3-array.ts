{
    //* Array
    const fruits: string[] = ['apple', 'banana'];
    const score: Array<Number> = [1, 2, 3];

    //* readonly 가 있기 때문에 주어진 데이터를 업데이트 또는 변경할 수 없습니다.
    function printArray(fruits: readonly string[]) {
        //! fruits.push()
        //? 또한 readonly를 작성할때는 Array<string> 이 되지 않습니다. 
    }

    //* Tuple 서로 다른 타입의 데이터를 담을 수 있습니다. 
    //! 단 Tuple 을 사용하는 곳에는 interface, type alias, class를 대체해서 사용하는 것을 선호합니다.
    // 데이터에 접근 할 때, 가독성이 떨어지기 때문입니다. 객체로 사용한다면 데이터에 명시적으로 접근이 가능합니다.
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123

    //*  구조분해할당을 통해서 student안에 있는 배열의 값을 할당할 수 있습니다.
    const [name, age] = student;

    //* 튜플을 사용한 좋은예시로는 react의 useState를 볼 수 있습니다.
}