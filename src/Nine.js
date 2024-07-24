import { useEffect, useState } from "react";

function Nine(){
    // const count = 0;
    const [count, setCount] = useState(1);

    const increase = () => {
        setCount(count + 2);
    }
    const decrease = () => {
        setCount(count-2);
    }
    useEffect(() => { 
        console.log("Use Effect is called");
    },[count]);
    return(
        <div>
            <h1>{count}</h1>
            <button className="btn btn-Light" onClick={increase}>Increment</button>
            <br></br>
            <br></br>
            <button className="btn btn-Light" onClick={decrease}>Decrement</button>
        </div>
    )
}
export default Nine;
