{/**
 * * Union Types: OR
 */

    type Direction = 'left' | 'right' | 'up' | 'down';

    function move(direction: Direction) {
        console.log(direction);
    }
    move('down')

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    //! Union example

    type isPass = {
        response: {
            body: string
        }
    }
    type isFail = {
        reason: string;
    }

    type Login = isPass | isFail

    function printLoginState(state: Login): void {
        if ('response' in state) {
            console.log(state.response.body)
        } else {
            console.log(state.reason)
        }
    }
}
