import { useState } from "react"

export function Counter(){

    const [counter, setCounter] = useState(0);

    const handleChange =(value)=>{
        setCounter(counter +value);
    };

    const handlChange =(value)=>{
        setCounter((counter) *2);
    };

    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={()=> handleChange(1)}>ADD</button>
            <button onClick={()=> { if(counter>=1){
                handleChange(-1);
            }}}>SUB</button>
           
            <button onClick={()=> handlChange(1)}>DUB</button>
        </div>
    )

}