"use client";
import { useState } from "react";

export default function NewItem(){
    const [count, setCount] = useState(1)

    const increment = () => {
        if( count < 20){
            setCount(count + 1);
            console.log(count);
        }

        if (count > 1){
            setCount(count - 1);
            console.log(count);
        }
        
    };

    return(
        <div>
            <p>count</p>
            <button onClick={increment} className="bg-blue-500 hover:stroke-cyan-700 active: flex-5">-</button>
            <button onClick={increment} className="bg-blue-500 hover:stroke-cyan-700 active: flex-5">+</button>
        </div>
    )
}
