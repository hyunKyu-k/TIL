{
    /**
     * * Type Aliases
     */
    type Text = string;
    const name: Text = 'fabian';
    const address: Text = 'korea'

    type Num = number;

    type Student = {
        name: string;
        age: number;
    }

    const student: Student = {
        name: "fabian",
        age: 12
    }

    /**
     * * String Literal Types
     */

    type Name = 'name';
    let fabianName: Name;
    fabianName = 'name';

    type JSON = "json"
    const json: JSON = 'json';

}