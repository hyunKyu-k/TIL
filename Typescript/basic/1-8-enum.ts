{
    //! Enum 여러가지 관련된 상수 값 들을 모아서, 한 곳에서 정의

    //* Javascript
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ "MONDAY": 0, 'TUESDAY': 1, "WEDNESDAY": 2 })
    const dayOfToday = DAYS_ENUM.MONDAY;

    //? Typescript

    type DaysOfWeek = 'Monday' | 'Tues' | 'Wed';

    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    console.log(Days.Monday)
    let day: Days = Days.Saturday;
    day = Days.Tuesday
    day = 10;
    console.log(day)

    let dayOfWeek: DaysOfWeek = 'Monday';
    dayOfWeek = 'Wed'

    //! 타입스크립트에서는 Enum 을 가능한 피하는게 좋다. Union타입이 더 안전하다.
}