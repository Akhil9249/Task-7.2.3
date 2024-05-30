import { useContext, useReducer, useState } from "react";
import "./App.css";
import { CountContext } from "./context/CountContext";

const countReducer = (state, action) => {
    switch (action.type) {
        case "decrement":
            return {
                count: state.count>0? state.count - 1:state.count,
            };

        case "Increment":
            return {
                count: state.count<10? state.count + 1:state.count,
            };

        default:
            return state;
    }
};

function App() {
    
    const { count, countIncrement, countdecrement } = useContext(CountContext)

    const [state, dispatch] = useReducer(countReducer, {
        count: 0,
    });

    return (
        <>
           <p>This shows the result from Context <h1>{count}</h1></p> 
           <p>This shows the result from Reducer <h1>{state.count}</h1></p>
            <div className="card">
                <button onClick={() =>{ countdecrement(); dispatch({ type: "decrement" })}}>-</button>

                <button onClick={() =>{ countIncrement(); dispatch({ type: "Increment" })}} >+</button>

            </div>
        </>
    );
}

export default App;
