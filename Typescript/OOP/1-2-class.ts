{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }



    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT: number = 7 //* class level
        coffeeBeans: number = 0; //* instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                // shots: shots, //* 키 와 값의 이름이 같다면 생략가능
                shots,
                hasMilk: false,
            }
        }
    }
    const maker = new CoffeeMaker(32)
    const maker2 = new CoffeeMaker(14)

    const maker3 = CoffeeMaker.makeMachine(3)
    console.log(maker, maker2, maker3)
}