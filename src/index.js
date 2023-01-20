import React, { useReducer, useState } from 'react';
import ReactDOM  from 'react-dom';

//use state hook
// const App = () =>{
    
//     const [counter, setCounter] = useState(1)
//     return (
//         <div>
//             <p>
//                 You clicked {counter} times
//             </p>
//             <button onClick={()=> setCounter(counter +1)}>
//                 Increment by 1
//             </button>
//             <button onClick={()=> setCounter(counter -1)}>
//                 Decrement by 1
//             </button>
//         </div>
//     );


//useReducer hook
//Reducer is a pure function that takes state and action as arguments nd returns a new state

//syntax
/* const [state, dispatch] = useReducer(reducer, initialState) */
const initialState = {
    total :0,
    totalIncrement : 0,
    totalDecrement :0
}

//reducer to return new state
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return{
                ...state,
                total:state.total +1,
                totalIncrement: state.totalIncrement + 1
            };
        case "DECREMENT":
            return {
                ...state,
                total:state.total - 1,
                totalDecrement: state.totalDecrement -1
            }
    }
}

const Counter = () =>{
    const [values, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <button onClick={()=> dispatch({type:"INCREMENT"})}>Increment</button>
            <button onClick={()=> dispatch({type:"DECREMENT"})}>Decrement</button>
            <hr />
            <h3>Total:{values.total}</h3>
            <h3>Total increment:{values.totalIncrement}</h3>
            <h3>Total decrement:{values.totalDecrement}</h3>
        </div>
        
    );
};
export default Counter;



ReactDOM.render(
    <Counter />,
    document.querySelector('#root')
)
