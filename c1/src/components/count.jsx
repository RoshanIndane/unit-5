import { useState } from "react";

export function Inventry(){

    const [counter, setCounter]=useState(0);

    const [pen, setPen]=useState(0);

    const [notebook, setNotebook]=useState(0);
   
    const [inkpen, setInkpen]=useState(0);
   
    const changeCount=(value)=>{
        setCounter(counter+value);
    };

    const changePen=(value)=>{
        setPen(pen+value);
    };

    const changeNotebooks=(value)=>{
        setNotebook(notebook+value);
    };

    const changeInkpen=(value)=>{
        setInkpen(inkpen+value);
    };



    return(
       <> <div className="items">
            <div><span className="totalBooks">Books:{counter}</span>
            <button className="addBook" onClick={()=>changeCount(1)}>+</button>
            <button className="remBook" onClick={()=>{if (counter>=1){changeCount(-1)}}}>-</button>
            </div>


            <div><span className="totalPens">Pens:{pen}</span>
            <button className="addPen" onClick={()=>changePen(1)}>+</button>
            <button className="remPen" onClick={()=>{if (pen>=1){changePen(-1)}}}>-</button>
            </div>


            <div><span className="totalNotebooks">Notebooks:{notebook}</span>
            <button className="addNotebook" onClick={()=>changeNotebooks(1)}>+</button>
            <button className="remNotebook" onClick={()=>{if (notebook>=1){changeNotebooks(-1)}}}>-</button>
            </div>


            <div><span className="totalInkpens">Inkpen:{inkpen}</span>
            <button className="addInkpen" onClick={()=>changeInkpen(1)}>+</button>
            <button className="remInkpen" onClick={()=>{if (inkpen>=1){changeInkpen(-1)}}}>-</button>
            </div>


<div className="total">{counter+pen+notebook+inkpen}</div>

        </div>
        </>
    )

}