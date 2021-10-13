import React, { useState } from 'react';
import Info from './components/Info';

const App = () => {
    const [color, setColor] = useState("")
    const [movie, setMovie] = useState("")

    const inputHandler = (e) => {
        if (e.target.id === 'color') {
            setColor(e.target.value)
        } else {
            setMovie(e.target.value)
        }
    }

    return (
        <div>
            <div>
                <label>
                    What is your favorite color of rainbow ?
                    <input id="color" value={color} onChange={inputHandler} />
                </label>
            </div>
            <div>
                What is your favorite movie among these ?
                <br />
                <label>
                    <input
                        type="radio"
                        name="movie"
                        value="Marriage Story"
                        onChange={inputHandler}
                    />
                    Marriage Story
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="movie"
                        value="The Fast And The Furious"
                        onChange={inputHandler}
                    />
                    The Fast And The Furious
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="movie"
                        value="Avengers"
                        onChange={inputHandler}
                    />
                    Avengers
                </label>
            </div>
            <Info color={color} movie={movie} />
        </div>
    );
};

export default App;