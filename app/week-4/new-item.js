"use client";
import { useState } from "react";

export default function NewItem(){
    const [count, setCount] = useState(1);

    const increment = () => { // increment the count until it hits 20
        if( count < 20){
            setCount(count + 1);
            
        }
    };    
    const decrement = () => { // decrement the count until it hits 1
        if (count > 1){
            setCount(count - 1);
            
        }
       
    };


 
    return (
      <main className="flex justify-center w-full">
        <div className="p-2 m-4 w-36 bg-white">
            <div className="flex justify-between ">
                <span class="text-black">{count}</span>
            
            <div className="flex">
                
                <button onClick={decrement} className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75">
                    -
                </button>
                <button onClick={increment} className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75">
                    +
                </button>
            </div>
            </div>
        </div>
      </main>

      );
    }
