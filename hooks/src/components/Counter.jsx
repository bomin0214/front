import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>카운트: {count} </p>
            <button onClick={() => setCount(count + 1)}> +1 </button>
            <button onClick={() => setCount(count - 1)}> -1 </button>
            <button onClick={() => setCount(0)}> 리셋 </button>
        </div>
    );
}

export default Counter;
