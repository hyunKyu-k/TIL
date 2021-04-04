{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    /**
     * private
     * public
     * protected
     */

    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7 //* class level
        private coffeeBeans: number = 0; //* instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0")
            }
            this.coffeeBeans += beans;
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
    // const maker = new CoffeeMaker(32) 
    const maker = CoffeeMaker.makeMachine(32)
    maker.fillCoffeeBeans(32)
    // maker.coffeeBeans = -23; //! --> 외부에서 유효하지않은 값을 넣게되면 문제가 발생하니, 은닉화 해야함
}