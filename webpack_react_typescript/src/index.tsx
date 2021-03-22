import React from 'react';
import ReactDOM from "react-dom";



const App = () => {
    return (
        <div>
            <h1>My React and Typescript App! {new Date().toLocaleDateString()}</h1>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
