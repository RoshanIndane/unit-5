import { useEffect, useState } from "react"


export const Stopwatch=()=>{

    const [timer, setTimer]=useState(10);

    useEffect(()=>{
    const id= setInterval(()=>{
            console.log("Interval", timer);

            setTimer((prev)=>{
            });
        },1000);

        return ()=>{
            clearInterval(id);
            console.log("Unmounted Timer")
        };
    },[]);



    return <div>
        Timer:{timer}
    </div>
}