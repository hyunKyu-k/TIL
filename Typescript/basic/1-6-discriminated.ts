{
    //! Union example

    type isPass = {
        result: 'success';
        response: {
            body: string
        }
    }
    type isFail = {
        result: 'fail';
        reason: string;
    }

    type Login = isPass | isFail

    function printsLoginState(state: Login): void {
        if (state.result === 'success') {
            console.log(state.response.body)
        } else {
            console.log(state.reason)
        }
    }
}