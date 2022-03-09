
import axios from "axios";
import { useEffect, useState } from "react";

export const Todos = ()=>{
const [text, setText]=useState("");
const [todos, setTodos]= useState([]);
const [page,setPage]=useState(1);


useEffect(()=>{
    getData();
},[page])

const getData=()=>{
    axios.get(`http://localhost:4000/todos?_limit=4&_page=${page}`).then(res=>{
        setTodos(res.data);
    })
}

    return (
        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            <button onClick={()=>{
                fetch("http://localhost:4000/todos", {
                    method:"POST",
                    body:JSON.stringify({title: text, purchased: false}),
                    headers:{
                        "content-type":"application/json",
                    },
                }).then(()=>{
                    getData();
                })
            }}>Save TODO</button>

            {
                todos.map((e)=>(
                    <div key={e.id}>{e.title}</div>
                ))
            }

            <button onClick={()=>{
                setPage(page-1)
            }}>Prev</button>


            <button onClick={()=>{
                setPage(page+1);
            }}>Next</button>
            
        </div>
    )
}